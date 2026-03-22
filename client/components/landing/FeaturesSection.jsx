"use client";
import { useState } from "react";
import FeatureCard from "@/components/landing/FeatureCard";

const features = [
  {
    number: "01",
    title: "Adaptive Questioning",
    description:
      "The AI doesn't follow a script. It reads your answer, finds your weak spots, and asks exactly the question that will push your thinking further.",
  },
  {
    number: "02",
    title: "Deep Evaluation",
    description:
      "Every answer is scored across four dimensions — factuality, context, originality and examples. Not just right or wrong, but how well you truly understand.",
  },
  {
    number: "03",
    title: "Session Analysis",
    description:
      "When your session ends, receive a full breakdown of your performance — strengths, areas to improve, and concrete next steps to guide your study.",
  },
  {
    number: "04",
    title: "Your Learning History",
    description:
      "Every session is saved. Track your progress over time, revisit past analyses, and watch yourself improve subject by subject.",
  },
];

export default function FeaturesSection() {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <section className="relative z-10 max-w-5xl mx-auto px-8 py-20">
      {/* Section divider */}
      <div className="flex items-center gap-4 mb-12">
        <div
          className="h-px flex-1"
          style={{ background: "var(--color-ruleline)" }}
        />
        <span
          className="text-xs uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-courier)",
            color: "var(--color-inkfaded)",
          }}
        >
          How it works
        </span>
        <div
          className="h-px flex-1"
          style={{ background: "var(--color-ruleline)" }}
        />
      </div>

      {/* Feature cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, i) => (
          <FeatureCard
            key={feature.number}
            feature={feature}
            isHovered={hoveredFeature === i}
            onMouseEnter={() => setHoveredFeature(i)}
            onMouseLeave={() => setHoveredFeature(null)}
          />
        ))}
      </div>
    </section>
  );
}
