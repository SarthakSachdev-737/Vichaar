import express from "express";
import { getAllSubjectsController } from "../controllers/subject.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";


const router = express.Router();

router.use(authMiddleware);
router.get("/", getAllSubjectsController);

export default router;