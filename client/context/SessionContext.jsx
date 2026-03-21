"use client";
import { createContext, useContext, useState } from "react";

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  // 3 states: idle | selected | started
  const [dashboardState, setDashboardState] = useState("idle");

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [currentSession, setCurrentSession] = useState(null);
  const [evaluation, setEvaluation] = useState(null);
  const [messages, setMessages] = useState([]);
  const [progress, setProgress] = useState(null);
  const [numQuestions, setNumQuestions] = useState(6);
  const [loading, setLoading] = useState(false);

  const selectSubject = (subject) => {
    setSelectedSubject(subject);
    setDashboardState("selected");
    setMessages([]);
    setCurrentSession(null);
    setProgress(null);
  };

  const startSession = (session, firstQuestion, progressInfo) => {
    setCurrentSession(session);
    setProgress(progressInfo);
    setMessages([{ role: "ai", content: firstQuestion.question }]);
    setDashboardState("started");
  };

  const addMessage = (message) => {
    setMessages((prev) => [...prev, message]);
  };

  const updateProgress = (progressInfo) => {
    setProgress(progressInfo);
  };

  const resetDashboard = () => {
    setDashboardState("idle");
    setSelectedSubject(null);
    setCurrentSession(null);
    setEvaluation(null);
    setMessages([]);
    setProgress(null);
    setNumQuestions(6);
    setLoading(false);
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
        setLoading,
        setNumQuestions,
        selectSubject,
        startSession,
        addMessage,
        updateProgress,
        resetDashboard,
        evaluation,
        setEvaluation,
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
