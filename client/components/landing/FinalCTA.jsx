"use client";
import { useRouter } from "next/navigation";

export default function FinalCTA() {
  const router = useRouter();

  return (
    <section
      className="relative z-10 pt-30  mt-7 pb-12"
      style={{ borderTop: "1px solid var(--color-ruleline)" }}
    >
      <div className="max-w-2xl mx-auto px-8 text-center">
        <h2
          className="text-4xl mb-4 -mt-12"
          style={{
            fontFamily: "var(--font-playfair)",
            color: "var(--color-inkdeep)",
            letterSpacing: "-0.02em",
          }}
        >
          Ready to think deeper?
        </h2>

        <p
          className="text-sm leading-relaxed mb-8"
          style={{
            fontFamily: "var(--font-lora)",
            color: "var(--color-inkfaded)",
          }}
        >
          Open your notebook. The AI is waiting to ask you something you haven't
          thought about yet.
        </p>

        <button
          onClick={() => router.push("/login")}
          className="inline-flex items-center gap-3 px-10 py-4 rounded-sm transition-all duration-150"
          style={{
            fontFamily: "var(--font-lora)",
            fontSize: "1rem",
            background: "var(--color-scholarred)",
            color: "var(--color-cream)",
            border: "1px solid #9b2e22",
            boxShadow: "4px 4px 0px #9b2e22",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translate(-2px, -2px)";
            e.currentTarget.style.boxShadow = "6px 6px 0px #9b2e22";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translate(0,0)";
            e.currentTarget.style.boxShadow = "4px 4px 0px #9b2e22";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
              fill="#4285F4"
            />
            <path
              d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
              fill="#34A853"
            />
            <path
              d="M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"
              fill="#FBBC05"
            />
            <path
              d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.961L3.964 7.293C4.672 5.166 6.656 3.58 9 3.58z"
              fill="#EA4335"
            />
          </svg>
          Start Learning with Google
        </button>

        <p
          className="text-xs mt-4"
          style={{
            fontFamily: "var(--font-courier)",
            color: "var(--color-inkfaded)",
          }}
        >
          Free to use · No credit card required
        </p>
      </div>

      {/* Footer */}
      <div
        className="mt-20 mx-8 pt-6 flex items-center justify-between"
        style={{ borderTop: "1px solid var(--color-ruleline)" }}
      >
        <div className="flex items-center gap-2">
          <span
            className="text-lg"
            style={{
              fontFamily: "var(--font-playfair)",
              color: "var(--color-inkdeep)",
            }}
          >
            Vichaar
          </span>
          <span
            className="text-xs mt-3"
            style={{
              fontFamily: "var(--font-courier)",
              color: "var(--color-inkfaded)",
            }}
          >
            — Think. Reflect. Learn.
          </span>
        </div>
        <p
          className="text-xs"
          style={{
            fontFamily: "var(--font-courier)",
            color: "var(--color-inkfaded)",
          }}
        >
          © 2025 Vichaar
        </p>
      </div>
    </section>
  );
}
