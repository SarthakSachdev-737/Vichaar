"use client";
import VichaarLogoName from "@/components/shared/VichaarLogoName";
import GoogleButton from "@/components/shared/GoogleButton";

export default function LoginCard({ onLogin, mounted }) {
  return (
    <div
      className="relative z-10 w-full max-w-md mx-6"
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.7s ease, transform 0.7s ease",
      }}
    >
      {/* Paper card */}
      <div
        className="bg-cream rounded-sm relative"
        style={{
          boxShadow:
            "4px 4px 0px #C8B89A, 8px 8px 0px #D4C9B0, 0 20px 60px rgba(26,20,16,0.15)",
          border: "1px solid #D4C9B0",
        }}
      >
        {/* Top tape strip */}
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 w-16 h-6 rounded-sm"
          style={{
            background: "rgba(201, 168, 76, 0.4)",
            border: "1px solid rgba(201, 168, 76, 0.5)",
          }}
        />

        <div className="p-10 pt-12">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px flex-1 bg-ruleline" />
              <span
                className="text-inkfaded text-xs uppercase tracking-widest"
                style={{ fontFamily: "var(--font-courier)" }}
              >
                Welcome to
              </span>
              <div className="h-px flex-1 bg-ruleline" />
            </div>

            {/* Logo */}
            <div className="flex justify-center mb-3">
              <VichaarLogoName size="lg" />
            </div>

            <p
              className="text-inkfaded text-sm mt-4 leading-relaxed"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              Your personal study companion.
              <br />
              Open your notebook and begin.
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px flex-1 bg-ruleline" />
            <span className="text-ruleline text-lg">✦</span>
            <div className="h-px flex-1 bg-ruleline" />
          </div>

          {/* Google Button */}
          <GoogleButton onClick={onLogin} />

          {/* Footer note */}
          <p
            className="text-center text-inkfaded mt-6 text-xs leading-relaxed"
            style={{ fontFamily: "var(--font-courier)" }}
          >
            By signing in, you agree to keep your
            <br />
            notebook tidy and your mind curious.
          </p>
        </div>

        {/* Bottom bar */}
        <div
          className="px-10 pb-6"
          style={{ borderTop: "1px solid var(--color-ruleline)" }}
        >
          <div className="flex justify-between items-center pt-4">
            <span
              className="text-xs text-inkfaded"
              style={{ fontFamily: "var(--font-courier)" }}
            >
              Session I
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-ruleline" />
              ))}
            </div>
            <span
              className="text-xs text-inkfaded"
              style={{ fontFamily: "var(--font-courier)" }}
            >
              Page 01
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
