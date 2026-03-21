"use client";

export default function ProgressBar({ progress, subject }) {
  if (!progress) return null;

  const { answered, target, remaining } = progress;
  const percentage = Math.round((answered / target) * 100);

  return (
    <div
      className="px-6 py-3 flex items-center gap-4"
      style={{
        borderBottom: "1px solid var(--color-ruleline)",
        background: "var(--color-cream)",
      }}
    >
      {/* Subject name */}
      <p
        className="text-sm flex-shrink-0"
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
    </div>
  );
}
