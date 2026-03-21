import { Router } from "express";
import { googleAuthController } from "../controllers/auth.controller.js";
import reqBodyMiddleware from "../middlewares/reqBody.middleware.js";

const router = Router();

router.post("/google", reqBodyMiddleware, googleAuthController);

export default router;