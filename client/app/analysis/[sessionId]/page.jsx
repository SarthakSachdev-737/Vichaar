"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { getStudySession } from "@/utils/axios";
import PageBackground from "@/components/shared/PageBackground";
import VichaarLogoName from "@/components/shared/VichaarLogoName";
import ScoreCard from "@/components/analysis/ScoreCard";
import DimensionBar from "@/components/analysis/DimensionBar";
import FeedbackSection from "@/components/analysis/FeedbackSection";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

export default function AnalysisPage() {
  const { isAuthenticated, loading: authLoading } = useAuth();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { sessionId } = useParams();

  useEffect(() => {
    if (!authLoading && !isAuthenticated) router.push("/login");
  }, [authLoading, isAuthenticated, router]);

  useEffect(() => {
    const fetchSession = async () => {
      if (!sessionId) return;
      try {
        const res = await getStudySession(sessionId);
        setSession(res.data.session);
      } catch (err) {
        console.error("Failed to fetch session:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchSession();
  }, [sessionId]);

  if (authLoading || loading) {
    return (
      <PageBackground className="flex items-center justify-center">
        <LoadingSpinner message="Preparing your analysis..." />
      </PageBackground>
    );
  }

  if (!session?.evaluation) {
    return (
      <PageBackground className="flex items-center justify-center">
        <div className="text-center">
          <p
            className="text-inkfaded text-sm"
            style={{ fontFamily: "var(--font-courier)" }}
          >
            No analysis found for this session.
          </p>
          <button
            onClick={() => router.push("/dashboard")}
            className="mt-4 px-6 py-2 rounded-sm text-sm"
            style={{
              fontFamily: "var(--font-lora)",
              background: "var(--color-inkdeep)",
              color: "var(--color-cream)",
              border: "1px solid var(--color-inkbrown)",
            }}
          >
            Back to Dashboard
          </button>
        </div>
      </PageBackground>
    );
  }

  const { evaluation, subject, createdAt, numQuestions } = session;

  return (
    <PageBackground>
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div
          className="flex items-center justify-between mb-8 pb-5"
          style={{ borderBottom: "1px solid var(--color-ruleline)" }}
        >
          <VichaarLogoName size="sm" />

          <button
            onClick={() => router.push("/dashboard")}
            className="flex items-center gap-2 px-4 py-2 rounded-sm text-sm transition-all duration-150"
            style={{
              fontFamily: "var(--font-lora)",
              color: "var(--color-inkfaded)",
              border: "1px solid var(--color-ruleline)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-inkdeep)";
              e.currentTarget.style.color = "var(--color-cream)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--color-inkfaded)";
            }}
          >
            ← Back to Dashboard
          </button>
        </div>

        {/* Session info */}
        <div className="mb-8">
          <h1
            className="text-4xl text-inkdeep mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {subject}
          </h1>
          <div className="flex items-center gap-4">
            <span
              className="text-xs"
              style={{
                fontFamily: "var(--font-courier)",
                color: "var(--color-inkfaded)",
              }}
            >
              {new Date(createdAt).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-sm"
              style={{
                fontFamily: "var(--font-courier)",
                background: "rgba(212,201,176,0.4)",
                color: "var(--color-inkfaded)",
                border: "1px solid var(--color-ruleline)",
              }}
            >
              {numQuestions} Questions
            </span>
            <span
              className="text-xs px-2 py-0.5 rounded-sm"
              style={{
                fontFamily: "var(--font-courier)",
                background: "rgba(46,125,114,0.1)",
                color: "var(--color-vintageteal)",
                border: "1px solid rgba(46,125,114,0.2)",
              }}
            >
              Completed
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px flex-1 bg-ruleline" />
          <span
            className="text-ruleline text-sm"
            style={{ fontFamily: "var(--font-courier)" }}
          >
            ✦ Analysis ✦
          </span>
          <div className="h-px flex-1 bg-ruleline" />
        </div>

        {/* Score + Dimensions side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <ScoreCard
            score={evaluation.score}
            totalFeedback={evaluation.summary}
          />
          <DimensionBar dimensionAverages={evaluation.dimensionAverages} />
        </div>

        {/* Feedback sections */}
        <FeedbackSection
          strengths={evaluation.strengths}
          weaknesses={evaluation.weaknesses}
          nextSteps={evaluation.nextSteps}
        />

        {/* Bottom actions */}
        <div
          className="flex items-center justify-between mt-8 pt-6"
          style={{ borderTop: "1px solid var(--color-ruleline)" }}
        >
          <p
            className="text-xs text-inkfaded"
            style={{ fontFamily: "var(--font-courier)" }}
          >
            Session ID: {sessionId?.slice(-8)}
          </p>

          <button
            onClick={() => router.push("/dashboard")}
            className="px-8 py-3 rounded-sm transition-all duration-150"
            style={{
              fontFamily: "var(--font-lora)",
              fontSize: "0.95rem",
              background: "var(--color-scholarred)",
              color: "var(--color-cream)",
              border: "1px solid #9b2e22",
              boxShadow: "3px 3px 0px #9b2e22",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translate(-1px, -1px)";
              e.currentTarget.style.boxShadow = "4px 4px 0px #9b2e22";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translate(0, 0)";
              e.currentTarget.style.boxShadow = "3px 3px 0px #9b2e22";
            }}
          >
            Start New Session →
          </button>
        </div>
      </div>
    </PageBackground>
  );
}
