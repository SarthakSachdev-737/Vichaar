"use client";

export default function PageBackground({ children, className = "" }) {
  return (
    <div
      className={`relative min-h-screen bg-parchment overflow-hidden ${className}`}
    >
      {/* Ruled horizontal lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            transparent,
            transparent 31px,
            #D4C9B0 31px,
            #D4C9B0 32px
          )`,
          backgroundSize: "100% 32px",
          opacity: 0.45,
        }}
      />

      {/* Red margin line */}
      <div
        className="absolute top-0 bottom-0 left-24 w-px pointer-events-none"
        style={{ background: "var(--color-scholarred)", opacity: 0.25 }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
