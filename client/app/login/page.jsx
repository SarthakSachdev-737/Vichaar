"use client";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { loginWithGoogle, isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) router.push("/dashboard");
  }, [isAuthenticated]);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="bg-gray-900 p-10 rounded-2xl flex flex-col items-center gap-6">
        <h1 className="text-white text-3xl font-bold">aiLearner</h1>
        <p className="text-gray-400">Login to start learning</p>
        <button
          onClick={loginWithGoogle}
          className="flex items-center gap-3 bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-100 transition"
        >
          Continue with Google
        </button>
      </div>
    </div>
  );
}
