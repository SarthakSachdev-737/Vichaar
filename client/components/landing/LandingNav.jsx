"use client";
import { useRouter } from "next/navigation";
import VichaarLogoName from "../shared/VichaarLogoName";

export default function LandingNav() {
  const router = useRouter();

  return (
    <nav
      className="relative z-20 flex items-center justify-between px-8 py-5"
      style={{
        borderBottom: "1px solid var(--color-ruleline)",
        background: "rgba(245,240,232,0.8)",
        backdropFilter: "blur(8px)",
      }}
    >
      <VichaarLogoName size="md" />

      <button
        onClick={() => router.push("/login")}
        className="px-5 py-2 rounded-sm text-sm transition-all duration-150"
        style={{
          fontFamily: "var(--font-lora)",
          background: "var(--color-inkdeep)",
          color: "var(--color-cream)",
          border: "1px solid var(--color-inkbrown)",
          boxShadow: "2px 2px 0px var(--color-inkbrown)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translate(-1px, -1px)";
          e.currentTarget.style.boxShadow = "3px 3px 0px var(--color-inkbrown)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translate(0,0)";
          e.currentTarget.style.boxShadow = "2px 2px 0px var(--color-inkbrown)";
        }}
      >
        Sign In
      </button>
    </nav>
  );
}
