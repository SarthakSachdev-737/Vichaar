"use client";
import { createContext, useContext, useState } from "react";

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [dashboardState, setDashboardState] = useState("idle");
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentSession, setCurrentSession] = useState(null);
  const [messages, setMessages] = useState([]);
  const [progress, setProgress] = useState(null);
  const [numQuestions, setNumQuestions] = useState(6);
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [evaluation, setEvaluation] = useState(null);
  const [isSessionComplete, setIsSessionComplete] = useState(false);

  const selectSubject = (subject) => {
    setSelectedSubject(subject);
    setDashboardState("selected");
    setMessages([]);
    setCurrentSession(null);
    setProgress(null);
    setIsSessionComplete(false);
  };

  const startSession = (session, firstQuestion, progressInfo) => {
    setCurrentSession(session);
    setProgress(progressInfo);
    setMessages([{ role: "ai", content: firstQuestion.question }]);
    setDashboardState("started");
    setIsSessionComplete(false);
  };

  const addMessage = (message) => {
    if (message._replace) {
      const { _replace, ...cleanMessage } = message;
      setMessages((prev) => {
        const updated = [...prev];
        for (let i = updated.length - 1; i >= 0; i--) {
          if (updated[i].role === "user") {
            updated[i] = cleanMessage;
            break;
          }
        }
        return updated;
      });
    } else {
      setMessages((prev) => [...prev, message]);
    }
  };

  const updateProgress = (progressInfo) => {
    setProgress(progressInfo);
  };

  const completeSession = () => {
    setIsSessionComplete(true);
  };

  const resetDashboard = () => {
    setDashboardState("idle");
    setSelectedSubject(null);
    setCurrentSession(null);
    setMessages([]);
    setProgress(null);
    setNumQuestions(6);
    setLoading(false);
    setIsTyping(false);
    setEvaluation(null);
    setIsSessionComplete(false);
  };

  return (
    <SessionContext.Provider
      value={{
        dashboardState,
        selectedSubject,
        currentSession,
        messages,
        progress,
        numQuestions,
        loading,
        isTyping,
        evaluation,
        isSessionComplete,
        setLoading,
        setNumQuestions,
        setIsTyping,
        setEvaluation,
        selectSubject,
        startSession,
        addMessage,
        updateProgress,
        completeSession,
        resetDashboard,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useStudySession = () => {
  const context = useContext(SessionContext);
  if (!context)
    throw new Error("useStudySession must be used within SessionProvider");
  return context;
};
