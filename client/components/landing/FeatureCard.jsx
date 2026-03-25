"use client";

export default function FeatureCard({
  feature,
  isHovered,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      className="p-8 rounded-sm transition-all duration-200 cursor-default"
      style={{
        background: isHovered ? "var(--color-inkdeep)" : "var(--color-cream)",
        border: "1px solid var(--color-ruleline)",
        boxShadow: isHovered
          ? "5px 5px 0px var(--color-inkbrown)"
          : "3px 3px 0px var(--color-ruleline)",
        transform: isHovered ? "translate(-2px, -2px)" : "translate(0,0)",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* Number */}
      <p
        className="text-xs mb-4 uppercase tracking-widest"
        style={{
          fontFamily: "var(--font-courier)",
          color: isHovered ? "var(--color-agedgold)" : "var(--color-inkfaded)",
        }}
      >
        {feature.number}
      </p>

      {/* Title */}
      <h3
        className="text-xl mb-3"
        style={{
          fontFamily: "var(--font-playfair)",
          color: isHovered ? "var(--color-cream)" : "var(--color-inkdeep)",
        }}
      >
        {feature.title}
      </h3>

      {/* Divider */}
      <div
        className="h-px mb-4"
        style={{
          background: isHovered
            ? "rgba(253,248,240,0.15)"
            : "var(--color-ruleline)",
        }}
      />

      {/* Description */}
      <p
        className="text-sm leading-relaxed"
        style={{
          fontFamily: "var(--font-lora)",
          color: isHovered ? "rgba(253,248,240,0.75)" : "var(--color-inkbrown)",
        }}
      >
        {feature.description}
      </p>
    </div>
  );
}
