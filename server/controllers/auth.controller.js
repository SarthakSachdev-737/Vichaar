import { googleAuthService } from "../services/auth.service.js";

export const googleAuthController = async (req, res, next) => {
    try {
        const { name, email, avatar, googleId } = req.body;

        if (!name || !email || !googleId || !avatar) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        const { user, token } = await googleAuthService(name, email, avatar, googleId);

        res.status(200).json({ success: true, user, token });
    } catch (error) {
        next(error);
    }
};