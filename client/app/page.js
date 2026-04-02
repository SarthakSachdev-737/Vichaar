"use client";
import { useState, useEffect } from "react";
import PageBackground from "@/components/shared/PageBackground";
import LandingNav from "@/components/landing/LandingNav";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import SessionDemo from "@/components/landing/SessionDemo";
import FinalCTA from "@/components/landing/FinalCTA";

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <PageBackground>
      <LandingNav />
      <HeroSection mounted={mounted} />
      <FeaturesSection />
      <SessionDemo mounted={mounted} />
      <FinalCTA />
    </PageBackground>
  );
}
