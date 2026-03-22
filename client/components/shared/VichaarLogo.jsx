"use client";

export default function VichaarLogo({ size = "md", dark = false }) {
  const sizes = {
    sm: { img: "w-7 h-7" },
    md: { img: "w-9 h-9" },
    lg: { img: "w-12 h-12" },
  };

  const s = sizes[size];

  return (
    <div
      className={`${s.img} rounded-sm shrink-0 overflow-hidden relative`}
      style={{
        background: dark ? "var(--color-cream)" : "var(--color-inkdeep)",
        border: `1.5px solid ${dark ? "var(--color-ruleline)" : "var(--color-inkbrown)"}`,
        boxShadow: dark
          ? "2px 2px 0px var(--color-ruleline)"
          : "2px 2px 0px var(--color-inkbrown)",
      }}
    >
      <img
        src="/Vichaar3.png"
        alt="Vichaar"
        className="w-full h-full object-contain"
        onError={(e) => {
          e.currentTarget.style.display = "none";
          e.currentTarget.parentElement.querySelector(
            ".fallback",
          ).style.display = "flex";
        }}
      />
      {/* Fallback वि — shown only if /Vichaar3.png is missing */}
      <span
        className="fallback absolute inset-0 items-center justify-center"
        style={{
          display: "none",
          fontFamily: "Hind, sans-serif",
          color: dark ? "var(--color-inkdeep)" : "var(--color-cream)",
          lineHeight: 1,
          fontSize: "0.85em",
        }}
      >
        वि
      </span>
    </div>
  );
}
