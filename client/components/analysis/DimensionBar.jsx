"use client";

const DIMENSIONS = [
  {
    key: "factuality",
    label: "Factuality",
    description: "Accuracy of your answers",
  },
  {
    key: "context",
    label: "Context",
    description: "How well you addressed the question",
  },
  {
    key: "originality",
    label: "Originality",
    description: "Your own reasoning and thinking",
  },
  {
    key: "example",
    label: "Examples",
    description: "Use of examples to explain concepts",
  },
];

export default function DimensionBar({ dimensionAverages }) {
  if (!dimensionAverages) return null;

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
        Dimension Breakdown
      </p>

      <div className="flex flex-col gap-5">
        {DIMENSIONS.map(({ key, label, description }) => {
          const value = dimensionAverages[key] ?? 0;
          const percentage = (value / 2) * 100;

          const getColor = () => {
            if (value >= 1.6) return "var(--color-vintageteal)";
            if (value >= 1) return "var(--color-agedgold)";
            return "var(--color-scholarred)";
          };

          return (
            <div key={key}>
              <div className="flex justify-between items-center mb-1.5">
                <div>
                  <span
                    className="text-sm"
                    style={{
                      fontFamily: "var(--font-lora)",
                      color: "var(--color-inkbrown)",
                    }}
                  >
                    {label}
                  </span>
                  <span
                    className="text-xs ml-2"
                    style={{
                      fontFamily: "var(--font-courier)",
                      color: "var(--color-inkfaded)",
                    }}
                  >
                    {description}
                  </span>
                </div>
                <span
                  className="text-sm shrink-0 ml-4"
                  style={{
                    fontFamily: "var(--font-courier)",
                    color: getColor(),
                  }}
                >
                  {value?.toFixed(1)}/2
                </span>
              </div>

              {/* Bar track */}
              <div
                className="h-1.5 rounded-full overflow-hidden"
                style={{ background: "var(--color-ruleline)" }}
              >
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{
                    width: `${percentage}%`,
                    background: getColor(),
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
