"use client";
import { useEffect, useRef } from "react";
import { useStudySession } from "@/context/SessionContext";
import ChatMessage from "@/components/dashboard/ChatMessage";
import ChatInput from "@/components/dashboard/ChatInput";
import ProgressBar from "@/components/dashboard/ProgressBar";
import TypingIndicator from "@/components/dashboard/TypingIndicator";
import SessionCompleteCard from "@/components/dashboard/SessionCompleteCard";
import InjectionTerminatedCard from "@/components/dashboard/InjectionTerminatedCard";

export default function ChatWindow() {
  const {
    messages,
    progress,
    selectedSubject,
    isTyping,
    isSessionComplete,
    isInjectionTerminated,
  } = useStudySession();

  const bottomRef = useRef(null);

  // Auto scroll to bottom on new messages, typing or state changes
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isSessionComplete, isInjectionTerminated]);

  return (
    <div className="flex-1 flex flex-col h-screen overflow-hidden">
      {/* Progress bar at top */}
      <ProgressBar progress={progress} subject={selectedSubject} />

      {/* Messages area */}
      <div
        className="flex-1 overflow-y-auto px-6 py-6"
        style={{
          backgroundImage: `repeating-linear-gradient(
            transparent,
            transparent 31px,
            #D4C9B0 31px,
            #D4C9B0 32px
          )`,
          backgroundSize: "100% 32px",
        }}
      >
        <div className="flex flex-col gap-6 mx-auto">
          {messages.map((message, index) => (
            <ChatMessage key={index} message={message} />
          ))}

          {/* Typing indicator */}
          {isTyping && <TypingIndicator />}

          {/* Injection terminated — takes priority, shown instead of complete card */}
          {isInjectionTerminated && <InjectionTerminatedCard />}

          {/* Session complete — only shown if NOT injection terminated */}
          {isSessionComplete && !isInjectionTerminated && (
            <SessionCompleteCard />
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input at bottom */}
      <ChatInput />
    </div>
  );
}
