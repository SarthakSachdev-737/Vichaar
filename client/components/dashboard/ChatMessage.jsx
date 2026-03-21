"use client";
import ReactMarkdown from "react-markdown";

export default function ChatMessage({ message }) {
  const isAi = message.role === "ai";

  return (
    <div className={`flex gap-3 ${isAi ? "justify-start" : "justify-end"}`}>
      {/* AI avatar */}
      {isAi && (
        <div
          className="w-7 h-7 rounded-sm flex-shrink-0 flex items-center justify-center mt-1"
          style={{
            background: "var(--color-inkdeep)",
            border: "1px solid var(--color-inkbrown)",
          }}
        >
          <span
            style={{
              fontFamily: "Hind, sans-serif",
              color: "var(--color-cream)",
              fontSize: "0.7rem",
              lineHeight: 1,
            }}
          >
            वि
          </span>
        </div>
      )}

      {/* Bubble */}
      <div
        className="max-w-lg px-4 py-3 rounded-sm"
        style={
          isAi
            ? {
                background: "var(--color-cream)",
                border: "1px solid var(--color-ruleline)",
                boxShadow: "2px 2px 0px var(--color-ruleline)",
                color: "var(--color-inkdeep)",
              }
            : {
                background: "var(--color-inkdeep)",
                border: "1px solid var(--color-inkbrown)",
                boxShadow: "2px 2px 0px var(--color-inkbrown)",
                color: "var(--color-cream)",
              }
        }
      >
        {/* Role label */}
        <p
          className="text-xs mb-1.5 uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-courier)",
            color: isAi ? "var(--color-inkfaded)" : "rgba(253,248,240,0.5)",
          }}
        >
          {isAi ? "Vichar AI" : "You"}
        </p>

        {/* Content */}
        <div
          className="text-sm leading-relaxed prose prose-sm max-w-none"
          style={{ fontFamily: "var(--font-lora)" }}
        >
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>

        {/* Evaluation badge if present */}
        {message.evaluation && (
          <div
            className="mt-3 pt-3 flex items-center gap-3 flex-wrap"
            style={{ borderTop: "1px solid rgba(212,201,176,0.4)" }}
          >
            {/* Score */}
            <span
              className="text-xs px-2 py-0.5 rounded-sm"
              style={{
                fontFamily: "var(--font-courier)",
                background: "rgba(201,168,76,0.15)",
                color: "var(--color-agedgold)",
                border: "1px solid rgba(201,168,76,0.3)",
              }}
            >
              Score: {message.evaluation.score}/10
            </span>

            {/* Feedback */}
            {message.evaluation.feedback && (
              <p
                className="text-xs w-full mt-1"
                style={{
                  fontFamily: "var(--font-courier)",
                  color: "var(--color-inkfaded)",
                }}
              >
                {message.evaluation.feedback}
              </p>
            )}
          </div>
        )}
      </div>

      {/* User avatar */}
      {!isAi && (
        <div
          className="w-7 h-7 rounded-sm flex-shrink-0 flex items-center justify-center mt-1"
          style={{
            background: "var(--color-agedgold)",
            border: "1px solid #a88a38",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--color-inkdeep)",
              fontSize: "0.75rem",
              fontWeight: "bold",
            }}
          >
            U
          </span>
        </div>
      )}
    </div>
  );
}
