"use client";

export default function SubjectCard({
  subject,
  isSelected,
  onClick,
  isDisabled,
}) {
  return (
    <button
      onClick={() => !isDisabled && onClick(subject)}
      className="w-full text-left px-4 py-3 rounded-sm transition-all duration-150 group"
      style={{
        background: isSelected ? "var(--color-inkdeep)" : "transparent",
        border: isSelected
          ? "1px solid var(--color-inkbrown)"
          : "1px solid transparent",
        boxShadow: isSelected ? "2px 2px 0px var(--color-inkbrown)" : "none",
        cursor: isDisabled ? "not-allowed" : "pointer",
      }}
      onMouseEnter={(e) => {
        if (!isSelected && !isDisabled) {
          e.currentTarget.style.background = "rgba(212, 201, 176, 0.4)";
          e.currentTarget.style.border = "1px solid var(--color-ruleline)";
        }
      }}
      onMouseLeave={(e) => {
        if (!isSelected && !isDisabled) {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.border = "1px solid transparent";
        }
      }}
    >
      <div className="flex items-center gap-3">
        {/* Text */}
        <div className="flex-1 min-w-0">
          <p
            className="text-sm font-medium truncate"
            style={{
              fontFamily: "var(--font-lora)",
              color: isSelected
                ? "var(--color-cream)"
                : "var(--color-inkbrown)",
            }}
          >
            {subject.label}
          </p>
          <p
            className="text-xs truncate mt-0.5"
            style={{
              fontFamily: "var(--font-courier)",
              color: isSelected
                ? "var(--color-ruleline)"
                : "var(--color-inkfaded)",
            }}
          >
            {subject.description}
          </p>
        </div>

        {/* Selected indicator */}
        {isSelected && (
          <div
            className="w-1.5 h-1.5 rounded-full shrink-0"
            style={{ background: "var(--color-agedgold)" }}
          />
        )}
      </div>
    </button>
  );
}
