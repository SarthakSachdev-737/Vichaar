"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { useStudySession } from "@/context/SessionContext";
import Sidebar from "@/components/dashboard/Sidebar";
import EmptyState from "@/components/dashboard/EmptyState";
import SubjectPreview from "@/components/dashboard/SubjectPreview";
import ChatWindow from "@/components/dashboard/ChatWindow";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

export default function DashboardPage() {
  const { isAuthenticated, loading } = useAuth();
  const { dashboardState } = useStudySession();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) router.push("/login");
  }, [loading, isAuthenticated, router]);

  if (loading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ background: "var(--color-parchment)" }}
      >
        <LoadingSpinner message="Opening your notebook..." />
      </div>
    );
  }

  return (
    <div
      className="flex h-screen overflow-hidden"
      style={{ background: "var(--color-parchment)" }}
    >
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Content — 3 states */}
      <div className="flex-1 flex overflow-hidden">
        {dashboardState === "idle" && <EmptyState />}
        {dashboardState === "selected" && <SubjectPreview />}
        {dashboardState === "started" && <ChatWindow />}
      </div>
    </div>
  );
}
