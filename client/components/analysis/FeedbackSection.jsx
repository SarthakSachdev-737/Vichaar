"use client";

export default function FeedbackSection({ strengths, weaknesses, nextSteps }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* What Went Well */}
      <div
        className="p-6 rounded-sm"
        style={{
          background: "var(--color-cream)",
          border: "1px solid var(--color-ruleline)",
          boxShadow: "4px 4px 0px var(--color-ruleline)",
        }}
      >
        <div className="flex items-center gap-2 mb-5">
          <span className="text-lg">✦</span>
          <p
            className="text-xs uppercase tracking-widest"
            style={{
              fontFamily: "var(--font-courier)",
              color: "var(--color-vintageteal)",
            }}
          >
            What Went Well
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {strengths?.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="shrink-0 w-5 h-5 rounded-sm flex items-center justify-center mt-0.5 text-xs"
                style={{
                  background: "rgba(46,125,114,0.1)",
                  color: "var(--color-vintageteal)",
                  border: "1px solid rgba(46,125,114,0.2)",
                  fontFamily: "var(--font-courier)",
                }}
              >
                {i + 1}
              </span>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-lora)",
                  color: "var(--color-inkbrown)",
                }}
              >
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* What to Improve */}
      <div
        className="p-6 rounded-sm"
        style={{
          background: "var(--color-cream)",
          border: "1px solid var(--color-ruleline)",
          boxShadow: "4px 4px 0px var(--color-ruleline)",
        }}
      >
        <div className="flex items-center gap-2 mb-5">
          <span className="text-lg">◈</span>
          <p
            className="text-xs uppercase tracking-widest"
            style={{
              fontFamily: "var(--font-courier)",
              color: "var(--color-softrust)",
            }}
          >
            What to Improve
          </p>
        </div>

        <ul className="flex flex-col gap-3">
          {weaknesses?.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="shrink-0 w-5 h-5 rounded-sm flex items-center justify-center mt-0.5 text-xs"
                style={{
                  background: "rgba(184,92,56,0.1)",
                  color: "var(--color-softrust)",
                  border: "1px solid rgba(184,92,56,0.2)",
                  fontFamily: "var(--font-courier)",
                }}
              >
                {i + 1}
              </span>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "var(--font-lora)",
                  color: "var(--color-inkbrown)",
                }}
              >
                {item}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Next Steps — full width */}
      {nextSteps?.length > 0 && (
        <div
          className="md:col-span-2 p-6 rounded-sm"
          style={{
            background: "var(--color-cream)",
            border: "1px solid var(--color-ruleline)",
            boxShadow: "4px 4px 0px var(--color-ruleline)",
          }}
        >
          <div className="flex items-center gap-2 mb-5">
            <span className="text-lg">→</span>
            <p
              className="text-xs uppercase tracking-widest"
              style={{
                fontFamily: "var(--font-courier)",
                color: "var(--color-agedgold)",
              }}
            >
              Next Steps
            </p>
          </div>

          <ul className="flex flex-col gap-3">
            {nextSteps?.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className="shrink-0 w-5 h-5 rounded-sm flex items-center justify-center mt-0.5 text-xs"
                  style={{
                    background: "rgba(201,168,76,0.1)",
                    color: "var(--color-agedgold)",
                    border: "1px solid rgba(201,168,76,0.3)",
                    fontFamily: "var(--font-courier)",
                  }}
                >
                  {i + 1}
                </span>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    fontFamily: "var(--font-lora)",
                    color: "var(--color-inkbrown)",
                  }}
                >
                  {item}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
