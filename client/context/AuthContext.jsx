"use client";
import { createContext, useContext } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { data: session, status } = useSession();

  const loading = status === "loading";
  const isAuthenticated = status === "authenticated";
  const user = session?.user || null;

  const loginWithGoogle = () => signIn("google", { callbackUrl: "/dashboard" });
  const logout = () => signOut({ callbackUrl: "/login" });

  return (
    <AuthContext.Provider
      value={{ user, loading, isAuthenticated, loginWithGoogle, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
};
