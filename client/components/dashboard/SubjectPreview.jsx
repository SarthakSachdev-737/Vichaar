"use client";
import { useAuth } from "@/context/AuthContext";
import { useStudySession } from "@/context/SessionContext";
import { startStudySession } from "@/utils/axios";
import LoadingSpinner from "@/components/shared/LoadingSpinner";

const QUESTION_OPTIONS = [3, 6, 10];

export default function SubjectPreview() {
  const { mongoUser } = useAuth();
  const {
    selectedSubject,
    numQuestions,
    setNumQuestions,
    startSession,
    loading,
    setLoading,
  } = useStudySession();

  const handleStart = async () => {
    if (!mongoUser?._id || !selectedSubject) return;
    try {
      setLoading(true);
      const res = await startStudySession({
        userId: mongoUser._id,
        subject: selectedSubject.name,
        numQuestions,
      });
      const { session, currentQuestion, progress } = res.data;
      startSession(session, currentQuestion, progress);
    } catch (err) {
      console.error("Failed to start session:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col items-center justify-center h-full px-10">
      {/* Subject name */}
      <div className="text-center mb-10">
        <h2
          className="text-3xl text-inkdeep mb-2"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {selectedSubject?.name}
        </h2>

        <p
          className="text-inkfaded text-sm"
          style={{ fontFamily: "var(--font-lora)" }}
        >
          {selectedSubject?.description}
        </p>
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 w-64 mb-8">
        <div className="h-px flex-1 bg-ruleline" />
        <span className="text-ruleline text-sm">✦</span>
        <div className="h-px flex-1 bg-ruleline" />
      </div>

      {/* Number of questions selector */}
      <div className="mb-8 text-center">
        <p
          className="text-xs uppercase tracking-widest mb-4 text-inkfaded"
          style={{ fontFamily: "var(--font-courier)" }}
        >
          Number of Questions
        </p>
        <div className="flex gap-3 justify-center">
          {QUESTION_OPTIONS.map((n) => (
            <button
              key={n}
              onClick={() => setNumQuestions(n)}
              className="w-14 h-14 rounded-sm transition-all duration-150 text-lg cursor-pointer"
              style={{
                fontFamily: "var(--font-playfair)",
                background:
                  numQuestions === n
                    ? "var(--color-inkdeep)"
                    : "var(--color-cream)",
                color:
                  numQuestions === n
                    ? "var(--color-cream)"
                    : "var(--color-inkbrown)",
                border:
                  numQuestions === n
                    ? "1px solid var(--color-inkbrown)"
                    : "1px solid var(--color-ruleline)",
                boxShadow:
                  numQuestions === n
                    ? "2px 2px 0px var(--color-inkbrown)"
                    : "2px 2px 0px var(--color-ruleline)",
              }}
            >
              {n}
            </button>
          ))}
        </div>
        <p
          className="text-xs mt-3 text-inkfaded"
          style={{ fontFamily: "var(--font-courier)" }}
        >
          Each session adapts to your answers
        </p>
      </div>

      {/* Start button */}
      {loading ? (
        <LoadingSpinner message="Starting your session..." />
      ) : (
        <button
          onClick={handleStart}
          className="px-12 py-4 rounded-sm transition-all duration-150 cursor-pointer"
          style={{
            background: "var(--color-scholarred)",
            color: "var(--color-cream)",
            fontFamily: "var(--font-lora)",
            fontSize: "1rem",
            letterSpacing: "0.05em",
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
          Begin Vichaar →
        </button>
      )}

      {/* Note */}
      <p
        className="text-xs text-inkfaded mt-5 text-center"
        style={{ fontFamily: "var(--font-courier)" }}
      >
        The AI will ask questions and follow up
        <br />
        based on your answers
      </p>
    </div>
  );
}
