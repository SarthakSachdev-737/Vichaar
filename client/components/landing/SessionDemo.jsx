"use client";

const messages = [
  {
    role: "ai",
    text: "What is the bias-variance tradeoff in machine learning?",
  },
  {
    role: "user",
    text: "Bias is when your model is too simple and underfits. Variance is when it's too complex and overfits the training data.",
  },
  {
    role: "ai",
    text: "Good start. Can you give a concrete example that illustrates both failure modes — and explain what happens in between?",
  },
  {
    role: "user",
    text: "A linear model on a curved dataset has high bias. A 100-degree polynomial memorises noise — high variance. A well-tuned decision tree sits in the sweet spot.",
  },
];

export default function SessionDemo({ mounted }) {
  return (
    <section
      className="relative z-10 py-20"
      style={{ borderTop: "1px solid var(--color-ruleline)" }}
    >
      <div className="max-w-5xl mx-auto px-8">
        {/* Section label */}
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
            A session in Vichaar
          </span>
          <div
            className="h-px flex-1"
            style={{ background: "var(--color-ruleline)" }}
          />
        </div>

        {/* Mock chat */}
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`flex ${msg.role === "ai" ? "justify-start" : "justify-end"}`}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(10px)",
                transition: `opacity 0.5s ease ${0.1 + i * 0.15}s, transform 0.5s ease ${0.1 + i * 0.15}s`,
              }}
            >
              <div
                className="max-w-sm px-4 py-3 rounded-sm text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-lora)",
                  ...(msg.role === "ai"
                    ? {
                        background: "var(--color-cream)",
                        border: "1px solid var(--color-ruleline)",
                        boxShadow: "2px 2px 0px var(--color-ruleline)",
                        color: "var(--color-inkdeep)",
                      }
                    : {
                        background: "var(--color-inkdeep)",
                        border: "1px solid var(--color-inkbrown)",
                        boxShadow: "2px 2px 0px var(--color-inkbrown)",
                        color: "var(--color-cream)",
                      }),
                }}
              >
                <p
                  className="text-xs mb-1.5 uppercase tracking-widest"
                  style={{
                    fontFamily: "var(--font-courier)",
                    opacity: 0.5,
                  }}
                >
                  {msg.role === "ai" ? "Vichaar AI" : "You"}
                </p>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
