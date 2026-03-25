import axios from "axios";
import { getSession, signOut } from "next-auth/react";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach the backend token before every request — always fresh from session
api.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Auto sign-out on 401 from any API call
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      await signOut({ callbackUrl: "/login" });
    }
    return Promise.reject(error);
  }
);

// ── Auth ──────────────────────────────────────────
export const syncGoogleUser = (data) =>
  api.post("/api/auth/google", data);


// ── Subjects ──────────────────────────────────────
export const getSubjects = () =>
  api.get("/api/subjects");

// ── Study Sessions ────────────────────────────────
export const startStudySession = (data) =>
  api.post("/api/studySession/start", data);

export const getStudySession = (sessionId) =>
  api.get(`/api/studySession/${sessionId}`);

export const getSessionHistory = (userId) =>
  api.get(`/api/studySession/history/${userId}`);

// ── Chat ──────────────────────────────────────────
export const sendChatMessage = (data) =>
  api.post("/api/chat/message", data);

export const abandonStudySession = (sessionId) =>
  api.delete(`/api/studySession/${sessionId}/abandon`);

export default api;