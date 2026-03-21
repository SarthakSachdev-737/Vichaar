import User from "../models/user.model.js";
import { decodeAuthToken } from "../utils/jwt.util.js";
import logger from "../config/logger.config.js";

const authMiddleware = async (req, res, next) => {
    try {
        const headerToken = req.headers.authorization?.split(" ")[1];
        const cookieToken = req.cookies?.token;
        const token = headerToken || cookieToken;

        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized - Token missing" });
        }

        const decoded = decodeAuthToken(token);

        if (!decoded?.success) {
            return res.status(401).json({ success: false, message: "Unauthorized - Invalid token" });
        }

        const user = await User.findById(decoded.token.id);

        if (!user) {
            return res.status(401).json({ success: false, message: "Unauthorized - User not found" });
        }

        if (!user.isActive) {
            return res.status(403).json({ success: false, message: "Account suspended. Contact support." });
        }

        req.user = user;
        next();

    } catch (err) {
        logger.error(err);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

export default authMiddleware;
