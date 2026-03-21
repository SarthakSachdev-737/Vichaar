import User from "../models/user.model.js";
import { generateAuthToken } from "../utils/jwt.util.js";

export const googleAuthService = async (name, email, avatar, googleId) => {
    let user = await User.findOne({ googleId });

    if (!user) {
        user = await User.create({ name, email, avatar, googleId });
    }

    const token = generateAuthToken(user._id, user.role, user.name);
    return { user, token };
};