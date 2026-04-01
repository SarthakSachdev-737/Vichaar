"use client";
import { useState } from "react";
import { useStudySession } from "@/context/SessionContext";
import { sendChatMessage, terminateStudySession } from "@/utils/axios";

export default function ChatInput() {
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);

  const {
    currentSession,
    addMessage,
    updateProgress,
    setLoading,
    setEvaluation,
    setIsTyping,
    completeSession,
    isSessionComplete,
    isInjectionTerminated,
    setIsInjectionTerminated,
  } = useStudySession();

  const isDisabled = sending || isSessionComplete || isInjectionTerminated;

  const getPlaceholder = () => {
    if (isInjectionTerminated)
      return "Session terminated due to injection attempt";
    if (isSessionComplete) return "Session complete — view your analysis above";
    return "Write your answer here... (Enter to send)";
  };

  const handleSend = async () => {
    if (!input.trim() || isDisabled || !currentSession) return;

    const userContent = input.trim();
    setInput("");
    setSending(true);
    setIsTyping(true);

    // Optimistically add user message
    addMessage({ role: "user", content: userContent });

    try {
      const res = await sendChatMessage({
        sessionId: currentSession._id,
        content: userContent,
      });

      const { evaluation, nextQuestion, done, progress, report } = res.data;

      if (progress) updateProgress(progress);

      setIsTyping(false);

      if (done) {
        // Attach evaluation to last user message
        addMessage({
          role: "user",
          content: userContent,
          evaluation,
          _replace: true,
        });

        if (evaluation?.injection) {
          // ── Injection detected ──
          // Delete session from MongoDB silently
          try {
            await terminateStudySession(currentSession._id);
          } catch (err) {
            console.error("Failed to terminate session:", err);
          }
          setIsInjectionTerminated(true);
        } else {
          // ── Normal completion ──
          if (setEvaluation) setEvaluation(report);
          completeSession();
        }
      } else {
        // Session ongoing
        addMessage({
          role: "user",
          content: userContent,
          evaluation,
          _replace: true,
        });

        addMessage({
          role: "ai",
          content: nextQuestion?.question ?? "",
        });
      }
    } catch (err) {
      console.error("Failed to send message:", err);
      setIsTyping(false);
      addMessage({
        role: "ai",
        content: "Something went wrong. Please try again.",
      });
    } finally {
      setSending(false);
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="px-6 py-4"
      style={{
        borderTop: "1px solid var(--color-ruleline)",
        background: "var(--color-cream)",
      }}
    >
      <div className="flex gap-3 items-end max-w-3xl mx-auto">
        {/* Textarea */}
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={getPlaceholder()}
          rows={3}
          disabled={isDisabled}
          className="flex-1 resize-none outline-none px-4 py-3 rounded-sm text-sm leading-relaxed"
          style={{
            fontFamily: "var(--font-lora)",
            color: isDisabled
              ? "var(--color-inkfaded)"
              : "var(--color-inkdeep)",
            border: `1px solid ${isInjectionTerminated ? "rgba(192,57,43,0.3)" : "var(--color-ruleline)"}`,
            background: isDisabled
              ? "rgba(212,201,176,0.2)"
              : "var(--color-warmwhite)",
            boxShadow: "inset 2px 2px 4px rgba(212,201,176,0.3)",
            cursor: isDisabled ? "not-allowed" : "text",
          }}
        />

        {/* Send button */}
        <button
          onClick={handleSend}
          disabled={isDisabled || !input.trim()}
          className="flex-shrink-0 w-12 h-12 rounded-sm flex items-center justify-center transition-all duration-150"
          style={{
            background:
              isDisabled || !input.trim()
                ? "var(--color-ruleline)"
                : "var(--color-inkdeep)",
            border: "1px solid var(--color-inkbrown)",
            boxShadow:
              isDisabled || !input.trim()
                ? "none"
                : "2px 2px 0px var(--color-inkbrown)",
            cursor: isDisabled || !input.trim() ? "not-allowed" : "pointer",
          }}
          onMouseEnter={(e) => {
            if (!isDisabled && input.trim()) {
              e.currentTarget.style.transform = "translate(-1px, -1px)";
              e.currentTarget.style.boxShadow =
                "3px 3px 0px var(--color-inkbrown)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translate(0, 0)";
            e.currentTarget.style.boxShadow =
              "2px 2px 0px var(--color-inkbrown)";
          }}
        >
          {sending ? (
            <div className="w-4 h-4 border-2 border-cream border-t-transparent rounded-full animate-spin" />
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-cream)"
              strokeWidth="2"
            >
              <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" />
            </svg>
          )}
        </button>
      </div>

      <p
        className="text-xs mt-2 max-w-3xl mx-auto"
        style={{
          fontFamily: "var(--font-courier)",
          color: isInjectionTerminated
            ? "var(--color-scholarred)"
            : "var(--color-inkfaded)",
        }}
      >
        {isInjectionTerminated
          ? "Session ended — prompt injection detected"
          : isSessionComplete
            ? "Session ended — scroll up to review your answers"
            : "Shift + Enter for new line · Enter to send"}
      </p>
    </div>
  );
}
