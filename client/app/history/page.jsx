"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { getSessionHistory } from "@/utils/axios";
import PageBackground from "@/components/shared/PageBackground";
import VichaarLogoName from "@/components/shared/VichaarLogoName";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

function ScoreBadge({ score }) {
  const getColor = () => {
    if (score >= 8)
      return {
        bg: "rgba(46,125,114,0.1)",
        color: "var(--color-vintageteal)",
        border: "rgba(46,125,114,0.2)",
      };
    if (score >= 6)
      return {
        bg: "rgba(201,168,76,0.1)",
        color: "var(--color-agedgold)",
        border: "rgba(201,168,76,0.3)",
      };
    return {
      bg: "rgba(192,57,43,0.1)",
      color: "var(--color-scholarred)",
      border: "rgba(192,57,43,0.2)",
    };
  };

  const { bg, color, border } = getColor();

  return (
    <span
      className="text-sm px-3 py-1 rounded-sm"
      style={{
        fontFamily: "var(--font-courier)",
        background: bg,
        color,
        border: `1px solid ${border}`,
      }}
    >
      {score?.toFixed(1)}/10
    </span>
  );
}

function SessionHistoryCard({ session, onClick }) {
  const { subject, evaluation, createdAt, numQuestions } = session;

  return (
    <div
      className="p-6 rounded-sm cursor-pointer transition-all duration-150 group"
      style={{
        background: "var(--color-cream)",
        border: "1px solid var(--color-ruleline)",
        boxShadow: "3px 3px 0px var(--color-ruleline)",
      }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "4px 4px 0px var(--color-marginline)";
        e.currentTarget.style.transform = "translate(-1px, -1px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "3px 3px 0px var(--color-ruleline)";
        e.currentTarget.style.transform = "translate(0, 0)";
      }}
    >
      <div className="flex items-start justify-between gap-4">
        {/* Left */}
        <div className="flex items-start gap-4 flex-1 min-w-0">
          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3
              className="text-lg truncate mb-1 capitalize"
              style={{
                fontFamily: "var(--font-playfair)",
                color: "var(--color-inkdeep)",
              }}
            >
              {subject}
            </h3>

            <div className="flex items-center gap-3 flex-wrap">
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
                {numQuestions} Qs
              </span>
            </div>

            {/* Summary */}
            {evaluation?.summary && (
              <p
                className="text-xs mt-2 line-clamp-2 leading-relaxed"
                style={{
                  fontFamily: "var(--font-lora)",
                  color: "var(--color-inkfaded)",
                }}
              >
                {evaluation.summary}
              </p>
            )}
          </div>
        </div>

        {/* Right — score + arrow */}
        <div className="flex flex-col items-end gap-3 shrink-0">
          <ScoreBadge score={evaluation?.score} />

          {/* Dimension mini bars */}
          {evaluation?.dimensionAverages && (
            <div className="flex flex-col gap-1 w-24">
              {Object.entries(evaluation.dimensionAverages).map(
                ([key, val]) => (
                  <div key={key} className="flex items-center gap-1.5">
                    <span
                      className="text-xs w-12 text-right capitalize"
                      style={{
                        fontFamily: "var(--font-courier)",
                        color: "var(--color-inkfaded)",
                        fontSize: "0.6rem",
                      }}
                    >
                      {key.slice(0, 4)}
                    </span>
                    <div
                      className="flex-1 h-1 rounded-full overflow-hidden"
                      style={{ background: "var(--color-ruleline)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: `${(val / 2) * 100}%`,
                          background: "var(--color-agedgold)",
                        }}
                      />
                    </div>
                  </div>
                ),
              )}
            </div>
          )}

          <span
            className="text-xs group-hover:translate-x-1 transition-transform duration-150"
            style={{
              fontFamily: "var(--font-courier)",
              color: "var(--color-inkfaded)",
            }}
          >
            View →
          </span>
        </div>
      </div>
    </div>
  );
}

export default function HistoryPage() {
  const { isAuthenticated, loading: authLoading, mongoUser } = useAuth();
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const router = useRouter();

  const subjects = [
    "all",
    "machine learning",
    "computer networks",
    "data structures and algorithms",
    "oop basics",
    "artificial intelligence",
  ];

  useEffect(() => {
    if (!authLoading && !isAuthenticated) router.push("/login");
  }, [authLoading, isAuthenticated, router]);

  useEffect(() => {
    const fetchHistory = async () => {
      if (!mongoUser?._id) return;
      try {
        const res = await getSessionHistory(mongoUser._id);
        setSessions(res.data.sessions);
      } catch (err) {
        console.error("Failed to fetch history:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHistory();
  }, [mongoUser]);

  const filteredSessions =
    filter === "all" ? sessions : sessions.filter((s) => s.subject === filter);

  const avgScore = sessions.length
    ? (
        sessions.reduce((acc, s) => acc + (s.evaluation?.score ?? 0), 0) /
        sessions.length
      ).toFixed(1)
    : null;

  if (authLoading || loading) {
    return (
      <PageBackground className="flex items-center justify-center">
        <LoadingSpinner message="Loading your history..." />
      </PageBackground>
    );
  }

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

        {/* Page title */}
        <div className="mb-8">
          <h1
            className="text-4xl text-inkdeep mb-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Your Sessions
          </h1>
          <p
            className="text-sm text-inkfaded"
            style={{ fontFamily: "var(--font-lora)" }}
          >
            A record of all your Vichaar learning sessions
          </p>
        </div>

        {/* Stats bar */}
        {sessions.length > 0 && (
          <div
            className="grid grid-cols-3 gap-4 mb-8 p-5 rounded-sm"
            style={{
              background: "var(--color-cream)",
              border: "1px solid var(--color-ruleline)",
              boxShadow: "3px 3px 0px var(--color-ruleline)",
            }}
          >
            <div className="text-center">
              <p
                className="text-3xl"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--color-inkdeep)",
                }}
              >
                {sessions.length}
              </p>
              <p
                className="text-xs mt-1"
                style={{
                  fontFamily: "var(--font-courier)",
                  color: "var(--color-inkfaded)",
                }}
              >
                Total Sessions
              </p>
            </div>

            <div
              className="text-center"
              style={{
                borderLeft: "1px solid var(--color-ruleline)",
                borderRight: "1px solid var(--color-ruleline)",
              }}
            >
              <p
                className="text-3xl"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--color-agedgold)",
                }}
              >
                {avgScore}
              </p>
              <p
                className="text-xs mt-1"
                style={{
                  fontFamily: "var(--font-courier)",
                  color: "var(--color-inkfaded)",
                }}
              >
                Avg Score
              </p>
            </div>

            <div className="text-center">
              <p
                className="text-3xl"
                style={{
                  fontFamily: "var(--font-playfair)",
                  color: "var(--color-vintageteal)",
                }}
              >
                {[...new Set(sessions.map((s) => s.subject))].length}
              </p>
              <p
                className="text-xs mt-1"
                style={{
                  fontFamily: "var(--font-courier)",
                  color: "var(--color-inkfaded)",
                }}
              >
                Subjects
              </p>
            </div>
          </div>
        )}

        {/* Filter tabs */}
        {sessions.length > 0 && (
          <div className="flex gap-2 flex-wrap mb-6">
            {subjects.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                className="px-4 py-1.5 rounded-sm text-xs transition-all duration-150 capitalize"
                style={{
                  fontFamily: "var(--font-courier)",
                  background:
                    filter === s ? "var(--color-inkdeep)" : "transparent",
                  color:
                    filter === s
                      ? "var(--color-cream)"
                      : "var(--color-inkfaded)",
                  border:
                    filter === s
                      ? "1px solid var(--color-inkbrown)"
                      : "1px solid var(--color-ruleline)",
                }}
              >
                {s}
              </button>
            ))}
          </div>
        )}

        {/* Sessions list */}
        {filteredSessions.length === 0 ? (
          <div
            className="flex flex-col items-center justify-center py-20"
            style={{
              border: "1.5px dashed var(--color-ruleline)",
              borderRadius: "2px",
            }}
          >
            <span className="text-4xl mb-4">📖</span>
            <p
              className="text-inkfaded text-sm text-center"
              style={{ fontFamily: "var(--font-lora)" }}
            >
              {filter === "all"
                ? "No sessions yet. Start your first Vichaar session!"
                : `No ${filter} sessions yet.`}
            </p>
            <button
              onClick={() => router.push("/dashboard")}
              className="mt-5 px-6 py-2 rounded-sm text-sm transition-all duration-150"
              style={{
                fontFamily: "var(--font-lora)",
                background: "var(--color-scholarred)",
                color: "var(--color-cream)",
                border: "1px solid #9b2e22",
                boxShadow: "2px 2px 0px #9b2e22",
              }}
            >
              Start a Session →
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {filteredSessions.map((session) => (
              <SessionHistoryCard
                key={session._id}
                session={session}
                onClick={() => router.push(`/analysis/${session._id}`)}
              />
            ))}
          </div>
        )}

        {/* Bottom pagination hint */}
        {filteredSessions.length > 0 && (
          <p
            className="text-center text-xs mt-8 text-inkfaded"
            style={{ fontFamily: "var(--font-courier)" }}
          >
            Showing {filteredSessions.length} session
            {filteredSessions.length !== 1 ? "s" : ""}
          </p>
        )}
      </div>
    </PageBackground>
  );
}
