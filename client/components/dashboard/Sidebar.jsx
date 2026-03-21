"use client";
import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useStudySession } from "@/context/SessionContext";
import { getSubjects, getSessionHistory } from "@/utils/axios";
import VichaarLogo from "@/components/shared/VichaarLogo";
import SubjectCard from "@/components/dashboard/SubjectCard";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

export default function Sidebar() {
  const { user, mongoUser, logout } = useAuth();
  const { selectedSubject, selectSubject, dashboardState } = useStudySession();

  const [subjects, setSubjects] = useState([]);
  const [history, setHistory] = useState([]);
  const [loadingSubjects, setLoadingSubjects] = useState(true);

  // Fetch subjects on mount
  useEffect(() => {
    const fetchSubjects = async () => {
      try {
        const res = await getSubjects();
        setSubjects(res.data.subjects);
      } catch (err) {
        console.error("Failed to fetch subjects:", err);
      } finally {
        setLoadingSubjects(false);
      }
    };
    fetchSubjects();
  }, []);

  // Fetch session history when mongoUser is available
  useEffect(() => {
    const fetchHistory = async () => {
      if (!mongoUser?._id) return;
      try {
        const res = await getSessionHistory(mongoUser._id);
        setHistory(res.data.sessions);
      } catch (err) {
        console.error("Failed to fetch history:", err);
      }
    };
    fetchHistory();
  }, [mongoUser]);

  const isSessionStarted = dashboardState === "started";

  return (
    <div
      className="w-72 flex-shrink-0 h-screen flex flex-col"
      style={{
        background: "var(--color-oldpaper)",
        borderRight: "1px solid var(--color-marginline)",
      }}
    >
      {/* Logo area */}
      <div
        className="px-5 py-5"
        style={{ borderBottom: "1px solid var(--color-ruleline)" }}
      >
        <VichaarLogo size="md" />
        <p
          className="text-xs mt-1 ml-0.5"
          style={{
            fontFamily: "var(--font-courier)",
            color: "var(--color-inkfaded)",
          }}
        >
          Think. Reflect. Learn.
        </p>
      </div>

      {/* Subjects section */}
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <p
          className="text-xs uppercase tracking-widest px-2 mb-3"
          style={{
            fontFamily: "var(--font-courier)",
            color: "var(--color-inkfaded)",
          }}
        >
          Subjects
        </p>

        {loadingSubjects ? (
          <div className="flex justify-center py-6">
            <LoadingSpinner message="Loading subjects..." />
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            {subjects.map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                isSelected={selectedSubject?.id === subject.id}
                onClick={isSessionStarted ? () => {} : selectSubject}
              />
            ))}
          </div>
        )}

        {/* Session locked message */}
        {isSessionStarted && (
          <p
            className="text-xs text-center mt-3 px-2"
            style={{
              fontFamily: "var(--font-courier)",
              color: "var(--color-inkfaded)",
            }}
          >
            Session in progress — finish to switch subject
          </p>
        )}

        {/* Past sessions */}
        {history.length > 0 && (
          <div className="mt-6">
            <div
              className="h-px mb-4"
              style={{ background: "var(--color-ruleline)" }}
            />
            <p
              className="text-xs uppercase tracking-widest px-2 mb-3"
              style={{
                fontFamily: "var(--font-courier)",
                color: "var(--color-inkfaded)",
              }}
            >
              Past Sessions
            </p>
            <div className="flex flex-col gap-1">
              {history.slice(0, 5).map((session) => (
                <div
                  key={session._id}
                  className="px-4 py-2 rounded-sm"
                  style={{
                    background: "rgba(212, 201, 176, 0.3)",
                    border: "1px solid var(--color-ruleline)",
                  }}
                >
                  <div className="flex justify-between items-center">
                    <p
                      className="text-xs truncate"
                      style={{
                        fontFamily: "var(--font-lora)",
                        color: "var(--color-inkbrown)",
                      }}
                    >
                      {session.subject}
                    </p>
                    <span
                      className="text-xs flex-shrink-0 ml-2"
                      style={{
                        fontFamily: "var(--font-courier)",
                        color: "var(--color-agedgold)",
                      }}
                    >
                      {session.evaluation?.score?.toFixed(1) ?? "-"}
                    </span>
                  </div>
                  <p
                    className="text-xs mt-0.5"
                    style={{
                      fontFamily: "var(--font-courier)",
                      color: "var(--color-inkfaded)",
                    }}
                  >
                    {new Date(session.createdAt).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                    })}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* User profile at bottom */}
      <div
        className="px-4 py-4"
        style={{ borderTop: "1px solid var(--color-ruleline)" }}
      >
        <div className="flex items-center gap-3">
          {/* Avatar */}
          {user?.image ? (
            <img
              src={user.image}
              alt={user.name}
              className="w-8 h-8 rounded-full flex-shrink-0"
              style={{ border: "1.5px solid var(--color-ruleline)" }}
            />
          ) : (
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background: "var(--color-inkdeep)",
                color: "var(--color-cream)",
                fontFamily: "var(--font-playfair)",
                fontSize: "0.85rem",
              }}
            >
              {user?.name?.[0] ?? "?"}
            </div>
          )}

          {/* Name & email */}
          <div className="flex-1 min-w-0">
            <p
              className="text-sm truncate"
              style={{
                fontFamily: "var(--font-lora)",
                color: "var(--color-inkbrown)",
              }}
            >
              {user?.name}
            </p>
            <p
              className="text-xs truncate"
              style={{
                fontFamily: "var(--font-courier)",
                color: "var(--color-inkfaded)",
              }}
            >
              {user?.email}
            </p>
          </div>

          {/* Logout button */}
          <button
            onClick={logout}
            className="flex-shrink-0 p-1.5 rounded-sm transition-all duration-150"
            style={{
              border: "1px solid var(--color-ruleline)",
              color: "var(--color-inkfaded)",
            }}
            title="Logout"
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--color-inkdeep)";
              e.currentTarget.style.color = "var(--color-cream)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "var(--color-inkfaded)";
            }}
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4M16 17l5-5-5-5M21 12H9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
