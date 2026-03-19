"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) router.push("/login");
  }, [loading, isAuthenticated]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="text-white p-10">
      <h1>Welcome, {user?.name}</h1>
    </div>
  );
}
