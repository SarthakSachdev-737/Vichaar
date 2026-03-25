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
            answeredQuestions: report.answered,
            numQuestions: report.target,
            evaluation: {
                score: report.average_score,
                factuality: report.dimension_averages?.factuality || 0,
                context: report.dimension_averages?.context || 0,
                originality: report.dimension_averages?.originality || 0,
                example: report.dimension_averages?.example || 0,
                injection: false,
                feedback: report.overall_feedback,
                strengths: report.what_went_well || [],
                improvements: report.what_to_improve || [],
                nextSteps: report.next_steps || [],
            },
        },
        { new: true }
    );
};