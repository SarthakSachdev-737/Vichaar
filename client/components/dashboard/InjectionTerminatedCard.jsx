"use client";
import { useRouter } from "next/navigation";
import { useStudySession } from "@/context/SessionContext";

export default function InjectionTerminatedCard() {
  const router = useRouter();
  const { resetDashboard } = useStudySession();

  const handleStartNew = () => {
    resetDashboard();
    router.push("/dashboard");
  };

  return (
    <div className="flex gap-3 justify-start">
      {/* Red warning avatar */}
      <div
        className="w-7 h-7 rounded-sm flex-shrink-0 flex items-center justify-center mt-1"
        style={{
          background: "var(--color-scholarred)",
          border: "1px solid #9b2e22",
          boxShadow: "2px 2px 0px #9b2e22",
        }}
      >
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-cream)"
          strokeWidth="2.5"
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" />
        </svg>
      </div>

      {/* Card */}
      <div
        className="max-w-lg w-full px-6 py-5 rounded-sm"
        style={{
          background: "var(--color-cream)",
          border: "1px solid rgba(192,57,43,0.3)",
          boxShadow: "3px 3px 0px rgba(192,57,43,0.15)",
        }}
      >
        {/* Role label */}
        <p
          className="text-xs mb-3 uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-courier)",
            color: "var(--color-inkfaded)",
          }}
        >
          Vichaar AI
        </p>

        {/* Divider */}
        <div
          className="h-px mb-4"
          style={{ background: "rgba(192,57,43,0.2)" }}
        />

        {/* Title */}
        <h3
          className="text-xl mb-3"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "var(--color-scholarred)",
          }}
        >
          Session Terminated
        </h3>

        {/* Message */}
        <p
          className="text-sm leading-relaxed mb-2"
          style={{
            fontFamily: "var(--font-lora)",
            color: "var(--color-inkbrown)",
          }}
        >
          A prompt injection attempt was detected in your answer. This session
          has been ended and no analysis will be generated.
        </p>

        <p
          className="text-xs mb-5"
          style={{
            fontFamily: "var(--font-courier)",
            color: "var(--color-inkfaded)",
          }}
        >
          Please answer questions honestly to receive a meaningful evaluation.
        </p>

        {/* Divider */}
        <div
          className="h-px mb-5"
          style={{ background: "var(--color-ruleline)" }}
        />

        {/* Start new session button */}
        <button
          onClick={handleStartNew}
          className="w-full py-3 rounded-sm text-sm transition-all duration-150"
          style={{
            fontFamily: "var(--font-lora)",
            background: "var(--color-inkdeep)",
            color: "var(--color-cream)",
            border: "1px solid var(--color-inkbrown)",
            boxShadow: "2px 2px 0px var(--color-inkbrown)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translate(-1px, -1px)";
            e.currentTarget.style.boxShadow =
              "3px 3px 0px var(--color-inkbrown)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translate(0, 0)";
            e.currentTarget.style.boxShadow =
              "2px 2px 0px var(--color-inkbrown)";
          }}
        >
          Start New Session →
        </button>
      </div>
    </div>
  );
}
