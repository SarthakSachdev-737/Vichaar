import Session from "../models/studySession.model.js";
import Message from "../models/message.model.js";

export const createSession = async ({ userId, subject, aiSessionId }) => {
    return await Session.create({ userId, subject, aiSessionId, status: "ongoing" });
};

export const saveMessage = async ({ sessionId, role, content }) => {
    return await Message.create({ sessionId, role, content });
};

export const findSessionById = async (sessionId) => {
    return await Session.findById(sessionId);
};

export const getMessagesBySession = async (sessionId) => {
    return await Message.find({ sessionId }).sort({ createdAt: 1 });
};

export const getEvaluationBySessionId = async (sessionId) => {
    return await Session.findById(sessionId).select("evaluation");
};

export const getCompletedSessionsByUser = async (userId) => {
    return await Session.find({ userId, status: "completed" }).sort({ createdAt: -1 });
};

export const deleteSession = async (sessionId) => {
    return await Session.findByIdAndDelete(sessionId);
};

export const deleteMessagesBySession = async (sessionId) => {
    return await Message.deleteMany({ sessionId });
};

export const markSessionCompleted = async (sessionId, evaluation) => {
    return await Session.findByIdAndUpdate(
        sessionId,
        { status: "completed", evaluation },
        { new: true }
    );
};