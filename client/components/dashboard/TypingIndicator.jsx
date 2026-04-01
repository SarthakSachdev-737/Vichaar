"use client";

import VichaarLogo from "../shared/VichaarLogo";

export default function TypingIndicator() {
  return (
    <div className="flex gap-3 justify-start">
      {/* AI avatar */}

      <div
        className="w-7 h-7 rounded-sm shrink-0 flex items-center justify-center mt-1"
        // style={{
        //   background: "var(--color-inkdeep)",
        //   border: "1px solid var(--color-inkbrown)",
        // }}
      >
        <span
          style={{
            fontFamily: "Hind, sans-serif",
            color: "var(--color-cream)",
            fontSize: "0.7rem",
            lineHeight: 1,
          }}
        >
          <VichaarLogo size="sm" />
        </span>
      </div>

      {/* Bubble with 3 bouncing dots */}
      <div
        className="px-5 py-4 rounded-sm flex items-center gap-1.5"
        style={{
          background: "var(--color-cream)",
          border: "1px solid var(--color-ruleline)",
          boxShadow: "2px 2px 0px var(--color-ruleline)",
        }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full animate-bounce"
          style={{
            background: "var(--color-inkfaded)",
            animationDelay: "0ms",
          }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full animate-bounce"
          style={{
            background: "var(--color-inkfaded)",
            animationDelay: "150ms",
          }}
        />
        <div
          className="w-1.5 h-1.5 rounded-full animate-bounce"
          style={{
            background: "var(--color-inkfaded)",
            animationDelay: "300ms",
          }}
        />
      </div>
    </div>
  );
}
