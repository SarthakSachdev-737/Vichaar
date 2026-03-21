import express from "express";
import { sendMessage } from "../controllers/chat.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);
router.post("/message", sendMessage);

export default router;