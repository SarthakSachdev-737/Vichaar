"use client";
import { useState } from "react";
import { useStudySession } from "@/context/SessionContext";
import { abandonStudySession } from "@/utils/axios";
import AbandonConfirmDialog from "@/components/dashboard/AbandonConfirmDialog";

export default function ProgressBar({ progress, subject }) {
  const { currentSession, resetDashboard } = useStudySession();
  const [showDialog, setShowDialog] = useState(false);
  const [abandoning, setAbandoning] = useState(false);

  if (!progress) return null;

  const { answered, target, remaining } = progress;
  const percentage = Math.round((answered / target) * 100);

  const handleAbandon = async () => {
    if (!currentSession?._id) return;
    try {
      setAbandoning(true);
      await abandonStudySession(currentSession._id);
      setShowDialog(false);
      resetDashboard(); // reset to idle state
    } catch (err) {
      console.error("Failed to abandon session:", err);
    } finally {
      setAbandoning(false);
    }
  };

  return (
    <>
      {/* Abandon confirmation dialog */}
      {showDialog && (
        <AbandonConfirmDialog
          onConfirm={handleAbandon}
          onCancel={() => setShowDialog(false)}
          loading={abandoning}
        />
      )}

      <div
        className="px-6 py-3 flex items-center gap-4"
        style={{
          borderBottom: "1px solid var(--color-ruleline)",
          background: "var(--color-cream)",
        }}
      >
        {/* Subject name */}
        <p
          className="text-sm flex-shrink-0 capitalize"
          style={{
            fontFamily: "var(--font-lora)",
            color: "var(--color-inkbrown)",
          }}
        >
          {subject?.name}
        </p>

        {/* Progress bar track */}
        <div
          className="flex-1 h-1.5 rounded-full overflow-hidden"
          style={{ background: "var(--color-ruleline)" }}
        >
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${percentage}%`,
              background: "var(--color-scholarred)",
            }}
          />
        </div>

        {/* Count */}
        <p
          className="text-xs flex-shrink-0"
          style={{
            fontFamily: "var(--font-courier)",
            color: "var(--color-inkfaded)",
          }}
        >
          {answered}/{target}
        </p>

        {/* Remaining badge */}
        <span
          className="text-xs px-2 py-0.5 rounded-sm flex-shrink-0"
          style={{
            fontFamily: "var(--font-courier)",
            background: "rgba(201, 168, 76, 0.15)",
            color: "var(--color-agedgold)",
            border: "1px solid rgba(201, 168, 76, 0.3)",
          }}
        >
          {remaining} left
        </span>

        {/* End session button */}
        <button
          onClick={() => setShowDialog(true)}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-xs transition-all duration-150"
          style={{
            fontFamily: "var(--font-courier)",
            color: "var(--color-inkfaded)",
            border: "1px solid var(--color-ruleline)",
          }}
          title="End session"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--color-scholarred)";
            e.currentTarget.style.color = "var(--color-cream)";
            e.currentTarget.style.border = "1px solid #9b2e22";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "var(--color-inkfaded)";
            e.currentTarget.style.border = "1px solid var(--color-ruleline)";
          }}
        >
          End
        </button>
      </div>
    </>
  );
}
