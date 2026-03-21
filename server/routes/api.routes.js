import { Router } from "express";
import authRoutes from "./auth.routes.js";
import errorHandlerMiddleware from "../middlewares/error.middleware.js";
import loggerMiddleware from "../middlewares/logger.middleware.js";

const router = Router();

router.use(loggerMiddleware);
router.use("/auth", authRoutes);
router.use(errorHandlerMiddleware);

export default router;