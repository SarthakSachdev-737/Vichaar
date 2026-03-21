import express from "express";
import {
    startSession,
    getSession,
    getSessionHistory,
} from "../controllers/studySession.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);
router.post("/start", startSession);
router.get("/history/:userId", getSessionHistory); // ⚠️ must be before /:sessionId
router.get("/:sessionId", getSession);

export default router;