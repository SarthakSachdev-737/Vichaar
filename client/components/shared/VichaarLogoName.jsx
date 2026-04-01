"use client";

export default function VichaarLogoName({ size = "sm", dark = false }) {
  const sizes = {
    sm: { img: "w-7 h-7", text: "text-xl" },
    md: { img: "w-9 h-9", text: "text-3xl" },
    lg: { img: "w-12 h-12", text: "text-5xl" },
  };

  const s = sizes[size];

  return (
    <div className={`flex items-center gap-1.5 select-none`}>
      {/* Logo image — put your logo file as /public/logo.png */}
      <div
        className={`${s.img} rounded-sm shrink-0 overflow-hidden relative`}
        // style={{
        //     background: dark ? "var(--color-cream)" : "var(--color-inkdeep)",
        //     border: `1.5px solid ${dark ? "var(--color-ruleline)" : "var(--color-inkbrown)"}`,
        //   boxShadow: dark
        //     ? "2px 2px 0px var(--color-ruleline)"
        //     : "2px 2px 0px var(--color-inkbrown)",
        // }}
      >
        <img
          src="/Vichaar.png"
          alt="Vichaar"
          className="w-full h-full object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.parentElement.querySelector(
              ".fallback",
            ).style.display = "flex";
          }}
        />
        {/* Fallback वि — shown only if /public/logo.png is missing */}
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
          V
        </span>
      </div>

      {/* Product name */}
      <span
        className={s.text}
        style={{
          fontFamily: "var(--font-playfair)",
          color: dark ? "var(--color-cream)" : "var(--color-inkdeep)",
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        Vichaar
      </span>
    </div>
  );
}
