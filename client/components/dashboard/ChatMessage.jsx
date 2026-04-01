"use client";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import ReactMarkdown from "react-markdown";
import VichaarLogo from "../shared/VichaarLogo";
import UserAvatar from "../shared/UserAvatar";

// ── Score pill + modal details ──────────────────────────────
function EvaluationPill({ evaluation }) {
  const [isOpen, setIsOpen] = useState(false);

  const getScoreColor = (score) => {
    if (score >= 8)
      return {
        bg: "rgba(46,125,114,0.15)",
        color: "var(--color-vintageteal)",
        border: "rgba(46,125,114,0.35)",
      };
    if (score >= 5)
      return {
        bg: "rgba(201,168,76,0.15)",
        color: "var(--color-agedgold)",
        border: "rgba(201,168,76,0.35)",
      };
    return {
      bg: "rgba(192,57,43,0.15)",
      color: "var(--color-scholarred)",
      border: "rgba(192,57,43,0.35)",
    };
  };

  const c = getScoreColor(evaluation.score);

  return (
    <>
      <div className="flex items-center gap-2">
        {/* Info Icon Button */}
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center justify-center rounded-full transition-all duration-200"
          style={{
            width: "24px",
            height: "24px",
            background: "transparent",
            color: "var(--color-inkfaded)",
            cursor: "pointer",
          }}
          aria-label="View evaluation details"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "var(--color-inkdeep)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "var(--color-inkfaded)";
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
        </button>

        {/* Score Pill */}
        <div
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-sm"
          style={{
            background: c.bg,
            border: `1px solid ${c.border}`,
            color: c.color,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span
            style={{
              fontFamily: "var(--font-courier)",
              fontSize: "0.70rem",
              fontWeight: "700",
            }}
          >
            {evaluation.score}/10
          </span>
        </div>
      </div>

      {/* Fixed Modal Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          style={{
            background: "rgba(26,20,16,0.4)",
            backdropFilter: "blur(2px)",
          }}
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-2xl text-left rounded-sm overflow-hidden animate-in zoom-in-95 duration-200"
            style={{
              background: "var(--color-warmwhite)",
              border: `1px solid var(--color-ruleline)`,
              boxShadow: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)`,
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top border accent based on score */}
            <div
              className="h-1.5 w-full shrink-0"
              style={{ background: c.color }}
            />

            <div className="p-5 sm:p-6 overflow-y-auto">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p
                    className="text-xs uppercase tracking-widest font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-courier)",
                      color: "var(--color-inkdeep)",
                    }}
                  >
                    Vichaar Assessment
                  </p>
                  <span
                    className="text-3xl font-bold"
                    style={{
                      fontFamily: "var(--font-playfair)",
                      color: c.color,
                    }}
                  >
                    {evaluation.score}/10
                  </span>
                </div>

                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-sm hover:bg-black/5 transition-colors"
                  aria-label="Close"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-inkfaded)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Feedback text */}
              {evaluation.feedback && (
                <div
                  className="p-4 rounded-sm mb-5"
                  style={{
                    background: "var(--color-cream)",
                    border: "1px solid var(--color-ruleline)",
                  }}
                >
                  <p
                    className="text-sm leading-relaxed"
                    style={{
                      fontFamily: "var(--font-lora)",
                      color: "var(--color-inkbrown)",
                    }}
                  >
                    {evaluation.feedback}
                  </p>
                </div>
              )}

              {/* 2-column layout for Strengths & Improvements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Strengths */}
                {evaluation.strengths?.length > 0 && (
                  <div
                    className="p-4 rounded-sm"
                    style={{
                      background: "rgba(46,125,114,0.05)",
                      borderLeft: "3px solid var(--color-vintageteal)",
                    }}
                  >
                    <p
                      className="text-[0.7rem] uppercase tracking-widest mb-3 font-bold"
                      style={{
                        fontFamily: "var(--font-courier)",
                        color: "var(--color-vintageteal)",
                      }}
                    >
                      ✦ Strengths
                    </p>
                    <ul className="flex flex-col gap-2">
                      {evaluation.strengths.map((s, i) => (
                        <li
                          key={i}
                          className="text-sm leading-relaxed"
                          style={{
                            fontFamily: "var(--font-lora)",
                            color: "var(--color-inkdeep)",
                          }}
                        >
                          • {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Improvements */}
                {evaluation.improvements?.length > 0 && (
                  <div
                    className="p-4 rounded-sm"
                    style={{
                      background: "rgba(192,57,43,0.05)",
                      borderLeft: "3px solid var(--color-scholarred)",
                    }}
                  >
                    <p
                      className="text-[0.7rem] uppercase tracking-widest mb-3 font-bold"
                      style={{
                        fontFamily: "var(--font-courier)",
                        color: "var(--color-scholarred)",
                      }}
                    >
                      ◈ Areas to Improve
                    </p>
                    <ul className="flex flex-col gap-2">
                      {evaluation.improvements.map((imp, i) => (
                        <li
                          key={i}
                          className="text-sm leading-relaxed"
                          style={{
                            fontFamily: "var(--font-lora)",
                            color: "var(--color-inkdeep)",
                          }}
                        >
                          • {imp}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// ── Main ChatMessage component ────────────────────────────
export default function ChatMessage({ message }) {
  const isAi = message.role === "ai";
  const { user } = useAuth();

  return (
    <div className={`flex gap-3 ${isAi ? "justify-start" : "justify-end"}`}>
      {/* AI avatar */}
      {isAi && (
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
      )}

      {/* Bubble + score pill wrapper */}
      <div
        className={`flex flex-col ${isAi ? "items-start" : "items-end"} max-w-lg`}
      >
        {/* Bubble */}
        <div
          className="px-4 py-3 rounded-sm w-full"
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
            {isAi ? "Vichaar AI" : "You"}
          </p>

          {/* Content */}
          <div
            className="text-sm leading-relaxed"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            <ReactMarkdown>{message.content}</ReactMarkdown>
          </div>
        </div>

        {/* Score pill — only on user messages that have evaluation */}
        {!isAi && message.evaluation && (
          <div className="mt-1.5 mr-0.5">
            <EvaluationPill evaluation={message.evaluation} />
          </div>
        )}
      </div>

      {/* User avatar */}
      {!isAi && (
        <div className="w-7 h-7 shrink-0 flex items-center justify-center mt-1">
          <UserAvatar
            user={user}
            imgClassName="w-full h-full rounded-full object-cover"
            imgStyle={{
              boxShadow: "0 2px 4px rgba(26,20,16,0.15)",
              border: "1px solid var(--color-ruleline)",
            }}
            fallbackClassName="w-full h-full rounded-full flex items-center justify-center"
            fallbackStyle={{
              background: "var(--color-inkdeep)",
              color: "var(--color-cream)",
              boxShadow: "0 2px 6px rgba(26,20,16,0.3)",
              border: "1px solid var(--color-inkbrown)",
            }}
            fallbackSpanStyle={{
              fontFamily: "var(--font-playfair)",
              fontSize: "0.75rem",
              fontWeight: "bold",
              lineHeight: 1,
            }}
          />
        </div>
      )}
    </div>
  );
}
