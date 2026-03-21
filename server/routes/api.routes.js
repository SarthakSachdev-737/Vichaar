import { Router } from "express";
import authRoutes from "./auth.routes.js";
import subjectRoutes from "./subject.routes.js";
import studySessionRoutes from "./studySession.routes.js";
import chatRoutes from "./chat.routes.js";

const router = Router();


router.use("/auth", authRoutes);
router.use("/subjects", subjectRoutes);
router.use("/studySession", studySessionRoutes);
router.use("/chat", chatRoutes);


export default router;