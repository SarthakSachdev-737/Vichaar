import axios from "axios";
import {
    createSession,
    saveMessage,
    findSessionById,
    getMessagesBySession,
    getCompletedSessionsByUser,
    deleteMessagesBySession,
    deleteSession,
} from "../services/studySession.service.js";

const AI_URL = process.env.AI_MODEL_URL;

// POST /api/session/start
export const startSession = async (req, res, next) => {
    try {
        const { userId, subject, numQuestions = 6 } = req.body;

        if (!userId || !subject) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        // 1. Hit AI model
        const aiRes = await axios.post(`${AI_URL}/interview/start`, {
            num_questions: numQuestions,
        });
        const { session_id: aiSessionId, current_question, progress } = aiRes.data;

        // 2. Create session in MongoDB
        const session = await createSession({ userId, subject, aiSessionId });

        // 3. Save first AI question as message
        await saveMessage({
            sessionId: session._id,
            role: "ai",
            content: current_question.question,
        });

        res.status(201).json({ success: true, session, currentQuestion: current_question, progress });
    } catch (error) {
        next(error);
    }
};

// GET /api/session/:sessionId
export const getSession = async (req, res, next) => {
    try {
        const { sessionId } = req.params;

        if (!sessionId) {
            return res.status(400).json({ success: false, message: "Session ID is required" });
        }
        const session = await findSessionById(sessionId);
        if (!session) {
            return res.status(404).json({ success: false, message: "Session not found" });
        }

        const messages = await getMessagesBySession(sessionId);

        res.status(200).json({ success: true, session, messages });
    } catch (error) {
        next(error);
    }
};

// GET /api/session/history/:userId
export const getSessionHistory = async (req, res, next) => {
    try {
        const { userId } = req.params;
        if (!userId) {
            return res.status(400).json({ success: false, message: "User ID is required" });
        }
        const sessions = await getCompletedSessionsByUser(userId);
        res.status(200).json({ success: true, sessions });
    } catch (error) {
        next(error);
    }
};

// DELETE /api/studySession/:sessionId/abandon
export const abandonSession = async (req, res) => {
    try {
        const { sessionId } = req.params;

        if (!sessionId) {
            return res.status(400).json({ success: false, message: "Session ID is required" });
        }
        const session = await findSessionById(sessionId);
        if (!session) {
            return res.status(404).json({ success: false, message: "Session not found" });
        }

        if (session.status === "completed") {
            return res.status(400).json({ success: false, message: "Cannot abandon a completed session" });
        }

        // Delete all messages for this session
        await deleteMessagesBySession(sessionId);

        // Delete the session itself
        await deleteSession(sessionId);

        res.status(200).json({ success: true, message: "Session abandoned and deleted" });
    } catch (error) {
        next(error);
    }
};