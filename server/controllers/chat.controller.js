import axios from "axios";
import {
    findOngoingSession,
    saveUserMessage,
    saveAiMessage,
    completeSession,
} from "../services/chat.service.js";

const AI_URL = process.env.AI_MODEL_URL;

// POST /api/chat/message
export const sendMessage = async (req, res, next) => {
    try {
        const { sessionId, content } = req.body;

        if (!sessionId || !content) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }
        // 1. Get session
        const session = await findOngoingSession(sessionId);
        if (!session) {
            return res.status(404).json({ success: false, message: "Session not found" });
        }
        if (session.status === "completed") {
            return res.status(400).json({ success: false, message: "Session already completed" });
        }

        // 2. Get current question_id from AI model
        const currentRes = await axios.get(`${AI_URL}/interview/${session.aiSessionId}/current`);
        const { question_id } = currentRes.data;

        // 3. Save user message
        await saveUserMessage({ sessionId, content });

        // 4. Submit answer to AI model
        const answerRes = await axios.post(`${AI_URL}/interview/${session.aiSessionId}/answer`, {
            question_id,
            student_answer: content,
        });
        const { evaluation, next_question, done, progress } = answerRes.data;

        // 5. If done → fetch report and complete session
        if (done) {
            const reportRes = await axios.get(`${AI_URL}/interview/${session.aiSessionId}/report`);
            const report = reportRes.data;
            console.log("report", report);
            await completeSession(sessionId, report);

            return res.status(200).json({
                success: true,
                evaluation,
                done: true,
                report,
                progress,
            });
        }

        // 6. Save next AI question as message
        if (next_question) {
            await saveAiMessage({ sessionId, content: next_question.question });
        }

        res.status(200).json({
            success: true,
            evaluation,
            nextQuestion: next_question,
            done: false,
            progress,
        });
    } catch (error) {
        next(error);
    }
};