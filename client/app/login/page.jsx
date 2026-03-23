"use client";
import { useAuth } from "@/context/AuthContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import PageBackground from "@/components/shared/PageBackground";
import LoginCard from "@/components/shared/LoginCard";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

export default function LoginPage() {
  const { loginWithGoogle, isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isAuthenticated) router.push("/dashboard");
  }, [isAuthenticated, router]);

  if (loading) {
    return (
      <PageBackground className="flex items-center justify-center">
        <LoadingSpinner message="Opening your notebook..." />
      </PageBackground>
    );
  }

  return (
    <PageBackground className="flex flex-col items-center justify-center">
      {/* Corner stamp */}
      <div
        className="absolute top-8 right-8 w-16 h-16 border-2 border-agedgold rounded-full flex items-center justify-center pointer-events-none"
        style={{
          opacity: mounted ? 0.4 : 0,
          transition: "opacity 1s ease 0.5s",
        }}
      >
        <span
          className="text-agedgold text-xs text-center leading-tight"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          EST
          <br />
          2025
        </span>
      </div>

      {/* Login card */}
      <LoginCard onLogin={loginWithGoogle} mounted={mounted} />

      {/* Subject tags */}
      <div
        style={{
          opacity: mounted ? 1 : 0,
          transition: "opacity 0.7s ease 0.4s",
        }}
      ></div>
    </PageBackground>
  );
}
