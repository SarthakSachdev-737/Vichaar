"use client";

export default function EmptyState() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full px-10">
      {/* Decorative notebook icon */}
      <div
        className="w-20 h-20 rounded-sm flex items-center justify-center mb-6"
        style={{
          background: "rgba(212, 201, 176, 0.3)",
          border: "1.5px dashed var(--color-ruleline)",
        }}
      >
        <span className="text-4xl">📖</span>
      </div>

      {/* Heading */}
      <h2
        className="text-2xl text-inkbrown text-center mb-3"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Choose a Subject
      </h2>

      {/* Subtext */}
      <p
        className="text-inkfaded text-sm text-center leading-relaxed max-w-xs"
        style={{ fontFamily: "var(--font-lora)" }}
      >
        Select a subject from the left sidebar to begin your Vichaar session.
        The AI will guide your thinking.
      </p>

      {/* Decorative divider */}
      <div className="flex items-center gap-3 mt-8 w-48">
        <div className="h-px flex-1 bg-ruleline" />
        <span className="text-ruleline text-sm">✦</span>
        <div className="h-px flex-1 bg-ruleline" />
      </div>

      {/* Hint */}
      <p
        className="text-inkfaded text-xs mt-4 text-center"
        style={{ fontFamily: "var(--font-courier)" }}
      >
        5 subjects available
      </p>
    </div>
  );
}
