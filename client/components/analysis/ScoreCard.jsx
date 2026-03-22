"use client";

export default function ScoreCard({ score, totalFeedback }) {
  const percentage = Math.round((score / 10) * 100);

  const getScoreColor = () => {
    if (score >= 8) return "var(--color-vintageteal)";
    if (score >= 6) return "var(--color-agedgold)";
    return "var(--color-scholarred)";
  };

  const getScoreLabel = () => {
    if (score >= 8) return "Excellent";
    if (score >= 6) return "Good";
    if (score >= 4) return "Fair";
    return "Needs Work";
  };

  return (
    <div
      className="p-8 rounded-sm"
      style={{
        background: "var(--color-cream)",
        border: "1px solid var(--color-ruleline)",
        boxShadow: "4px 4px 0px var(--color-ruleline)",
      }}
    >
      <p
        className="text-xs uppercase tracking-widest mb-6"
        style={{
          fontFamily: "var(--font-courier)",
          color: "var(--color-inkfaded)",
        }}
      >
        Overall Score
      </p>

      <div className="flex items-end gap-6 mb-6">
        {/* Score number */}
        <div>
          <span
            className="text-7xl leading-none"
            style={{
              fontFamily: "var(--font-playfair)",
              color: getScoreColor(),
            }}
          >
            {score?.toFixed(1)}
          </span>
          <span
            className="text-2xl ml-1"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--color-inkfaded)",
            }}
          >
            /10
          </span>
        </div>

        {/* Label */}
        <div className="mb-3">
          <span
            className="px-3 py-1 rounded-sm text-sm"
            style={{
              fontFamily: "var(--font-courier)",
              background: `${getScoreColor()}20`,
              color: getScoreColor(),
              border: `1px solid ${getScoreColor()}40`,
            }}
          >
            {getScoreLabel()}
          </span>
        </div>
      </div>

      {/* Progress bar */}
      <div
        className="h-2 rounded-full overflow-hidden mb-6"
        style={{ background: "var(--color-ruleline)" }}
      >
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{
            width: `${percentage}%`,
            background: getScoreColor(),
          }}
        />
      </div>

      {/* Overall feedback */}
      {totalFeedback && (
        <p
          className="text-sm leading-relaxed"
          style={{
            fontFamily: "var(--font-lora)",
            color: "var(--color-inkbrown)",
          }}
        >
          {totalFeedback}
        </p>
      )}
    </div>
  );
}
