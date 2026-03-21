"use client";

export default function VichaarLogo({ size = "md", dark = false }) {
  const sizes = {
    sm: { stamp: "w-7 h-7 text-sm", text: "text-xl", gap: "gap-2" },
    md: { stamp: "w-9 h-9 text-base", text: "text-3xl", gap: "gap-2" },
    lg: { stamp: "w-12 h-12 text-xl", text: "text-5xl", gap: "gap-3" },
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center ${s.gap}`}>
      {/* Stamp mark — वि */}
      <div
        className={`${s.stamp} rounded-sm flex items-center justify-center flex-shrink-0`}
        style={{
          background: dark ? "var(--color-cream)" : "var(--color-inkdeep)",
          border: `1.5px solid ${dark ? "var(--color-ruleline)" : "var(--color-inkbrown)"}`,
          boxShadow: dark
            ? "2px 2px 0px var(--color-ruleline)"
            : "2px 2px 0px var(--color-inkbrown)",
        }}
      >
        <span
          style={{
            fontFamily: "Hind, sans-serif",
            color: dark ? "var(--color-inkdeep)" : "var(--color-cream)",
            lineHeight: 1,
            fontSize: "0.85em",
          }}
        >
          वि
        </span>
      </div>

      {/* char in Playfair */}
      <span
        className={s.text}
        style={{
          fontFamily: "var(--font-playfair)",
          color: dark ? "var(--color-cream)" : "var(--color-inkdeep)",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        char
      </span>
    </div>
  );
}
