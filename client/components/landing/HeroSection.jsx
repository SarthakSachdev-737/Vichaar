"use client";
import { useRouter } from "next/navigation";

const subjects = ["Mathematics", "Science", "History", "Computer Science"];

export default function HeroSection({ mounted }) {
  const router = useRouter();

  return (
    <section className="relative z-10 max-w-5xl mx-auto px-8 pt-24 pb-20">
      {/* Eyebrow */}
      <div
        className="inline-flex items-center gap-2 mb-8"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(12px)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <div
          className="h-px w-8"
          style={{ background: "var(--color-scholarred)" }}
        />
        <span
          className="text-xs uppercase tracking-widest"
          style={{
            fontFamily: "var(--font-courier)",
            color: "var(--color-scholarred)",
          }}
        >
          AI Powered Learning
        </span>
        <div
          className="h-px w-8"
          style={{ background: "var(--color-scholarred)" }}
        />
      </div>

      {/* Main heading */}
      <div
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
        }}
      >
        <h1
          className="leading-none mb-9"
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: "clamp(3rem, 8vw, 6rem)",
            color: "var(--color-inkdeep)",
            letterSpacing: "-0.03em",
          }}
        >
          Don't just read.
          <br />
          <span style={{ color: "var(--color-scholarred)" }}>Vichaar.</span>
        </h1>
      </div>

      {/* Subheading */}
      <div
        className="max-w-xl"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s",
        }}
      >
        <p
          className="text-lg leading-7.5 mb-10"
          style={{
            fontFamily: "var(--font-lora)",
            color: "var(--color-inkbrown)",
          }}
        >
          Vichaar is an AI learning companion that tests your understanding
          through adaptive questioning — not multiple choice, but real thinking.
          The deeper you go, the sharper you get.
        </p>
      </div>

      {/* CTA + subject tags */}
      <div
        className="flex items-center gap-4 flex-wrap"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "opacity 0.7s ease 0.3s, transform 0.7s ease 0.3s",
        }}
      >
        <button
          onClick={() => router.push("/login")}
          className="flex items-center gap-3 px-8 py-4 rounded-sm transition-all duration-150"
          style={{
            fontFamily: "var(--font-lora)",
            fontSize: "1rem",
            background: "var(--color-inkdeep)",
            color: "var(--color-cream)",
            border: "1px solid var(--color-inkbrown)",
            boxShadow: "4px 4px 0px var(--color-inkbrown)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translate(-2px, -2px)";
            e.currentTarget.style.boxShadow =
              "6px 6px 0px var(--color-inkbrown)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translate(0,0)";
            e.currentTarget.style.boxShadow =
              "4px 4px 0px var(--color-inkbrown)";
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
          Begin with Google
        </button>
      </div>
    </section>
  );
}
