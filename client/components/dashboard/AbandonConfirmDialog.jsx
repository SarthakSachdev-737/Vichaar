"use client";

export default function AbandonConfirmDialog({ onConfirm, onCancel, loading }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: "rgba(26,20,16,0.5)" }}
    >
      <div
        className="w-full max-w-sm mx-6 rounded-sm p-8 relative"
        style={{
          background: "var(--color-cream)",
          border: "1px solid var(--color-ruleline)",
          boxShadow: "6px 6px 0px var(--color-marginline)",
        }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-5">
          <div
            className="w-12 h-12 rounded-sm flex items-center justify-center"
            style={{
              background: "rgba(192,57,43,0.1)",
              border: "1px solid rgba(192,57,43,0.2)",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-scholarred)"
              strokeWidth="2"
            >
              <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0zM12 9v4M12 17h.01" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h2
          className="text-xl text-center mb-2"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "var(--color-inkdeep)",
          }}
        >
          End Session?
        </h2>

        {/* Message */}
        <p
          className="text-sm text-center leading-relaxed mb-6"
          style={{
            fontFamily: "var(--font-lora)",
            color: "var(--color-inkfaded)",
          }}
        >
          Your current session will be permanently deleted. This cannot be
          undone.
        </p>

        {/* Divider */}
        <div
          className="h-px mb-6"
          style={{ background: "var(--color-ruleline)" }}
        />

        {/* Buttons */}
        <div className="flex gap-3">
          {/* Cancel */}
          <button
            onClick={onCancel}
            disabled={loading}
            className="flex-1 py-3 rounded-sm text-sm transition-all duration-150"
            style={{
              fontFamily: "var(--font-lora)",
              color: "var(--color-inkbrown)",
              border: "1px solid var(--color-ruleline)",
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-parchment)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Keep Going
          </button>

          {/* Confirm */}
          <button
            onClick={onConfirm}
            disabled={loading}
            className="flex-1 py-3 rounded-sm text-sm transition-all duration-150 flex items-center justify-center gap-2"
            style={{
              fontFamily: "var(--font-lora)",
              background: "var(--color-scholarred)",
              color: "var(--color-cream)",
              border: "1px solid #9b2e22",
              boxShadow: "2px 2px 0px #9b2e22",
              opacity: loading ? 0.7 : 1,
              cursor: loading ? "not-allowed" : "pointer",
            }}
            onMouseEnter={(e) => {
              if (!loading) {
                e.currentTarget.style.transform = "translate(-1px, -1px)";
                e.currentTarget.style.boxShadow = "3px 3px 0px #9b2e22";
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0, 0)";
              e.currentTarget.style.boxShadow = "2px 2px 0px #9b2e22";
            }}
          >
            {loading ? (
              <div className="w-4 h-4 border-2 border-cream border-t-transparent rounded-full animate-spin" />
            ) : (
              "End Session"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
