"use client";
import { useRouter } from "next/navigation";
import { useStudySession } from "@/context/SessionContext";
import VichaarLogo from "../shared/VichaarLogo";

export default function SessionCompleteCard() {
  const router = useRouter();
  const { currentSession, progress } = useStudySession();

  const handleViewAnalysis = () => {
    if (currentSession?._id) {
      router.push(`/analysis/${currentSession._id}`);
    }
  };

  return (
    <div className="flex gap-3 justify-start">
      {/* AI avatar */}
      <div
        className="w-7 h-7 rounded-sm shrink-0 flex items-center justify-center mt-1"
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
          <VichaarLogo size="sm" />
        </span>
      </div>

      {/* Card */}
      <div
        className="max-w-lg w-full px-6 py-5 rounded-sm"
        style={{
          background: "var(--color-cream)",
          border: "1px solid var(--color-ruleline)",
          boxShadow: "3px 3px 0px var(--color-ruleline)",
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
          style={{ background: "var(--color-ruleline)" }}
        />

        {/* Title */}
        <h3
          className="text-xl mb-2"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "var(--color-inkdeep)",
          }}
        >
          Session Complete ✦
        </h3>

        {/* Message */}
        <p
          className="text-sm leading-relaxed mb-6"
          style={{
            fontFamily: "var(--font-lora)",
            color: "var(--color-inkbrown)",
          }}
        >
          You have answered all {progress?.target ?? ""} questions. Scroll up to
          review your answers and scores before viewing your full analysis.
        </p>

        {/* View Analysis button */}
        <button
          onClick={handleViewAnalysis}
          className="w-full py-3 rounded-sm text-sm transition-all duration-150"
          style={{
            fontFamily: "var(--font-lora)",
            background: "var(--color-inkdeep)",
            color: "var(--color-cream)",
            border: "1px solid var(--color-inkbrown)",
            boxShadow: "3px 3px 0px var(--color-inkbrown)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translate(-1px, -1px)";
            e.currentTarget.style.boxShadow =
              "4px 4px 0px var(--color-inkbrown)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translate(0, 0)";
            e.currentTarget.style.boxShadow =
              "3px 3px 0px var(--color-inkbrown)";
          }}
        >
          View Full Analysis →
        </button>

        {/* Hint */}
        <p
          className="text-xs text-center mt-3"
          style={{
            fontFamily: "var(--font-courier)",
            color: "var(--color-inkfaded)",
          }}
        >
          Scroll up to review all your answers and scores
        </p>
      </div>
    </div>
  );
}
