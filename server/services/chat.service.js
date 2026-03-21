import Message from "../models/message.model.js";
import Session from "../models/studySession.model.js";

export const findOngoingSession = async (sessionId) => {
    return await Session.findById(sessionId);
};

export const saveUserMessage = async ({ sessionId, content }) => {
    return await Message.create({ sessionId, role: "user", content });
};

export const saveAiMessage = async ({ sessionId, content }) => {
    return await Message.create({ sessionId, role: "ai", content });
};

export const completeSession = async (sessionId, report) => {
    return await Session.findByIdAndUpdate(
        sessionId,
        {
            status: "completed",
            evaluation: {
                score: report.score,
                factuality: report.factuality,
                context: report.context,
                originality: report.originality,
                example: report.example,
                injection: report.injection,
                feedback: report.feedback,
                strengths: report.strengths,
                improvements: report.improvements,
            },
        },
        { new: true }
    );
};