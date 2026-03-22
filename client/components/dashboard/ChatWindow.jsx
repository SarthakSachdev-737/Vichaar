"use client";
import { useEffect, useRef } from "react";
import { useStudySession } from "@/context/SessionContext";
import ChatMessage from "@/components/dashboard/ChatMessage";
import ChatInput from "@/components/dashboard/ChatInput";
import ProgressBar from "@/components/dashboard/ProgressBar";
import TypingIndicator from "@/components/dashboard/TypingIndicator";

export default function ChatWindow() {
  const { messages, progress, selectedSubject, isTyping } = useStudySession();
  const bottomRef = useRef(null);

  // Auto scroll to bottom on new messages or typing indicator
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

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

          {/* Typing indicator — shown while AI is responding */}
          {isTyping && <TypingIndicator />}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input at bottom */}
      <ChatInput />
    </div>
  );
}
