import User from "../models/user.model.js";

export const googleAuth = async (req, res) => {
    try {
        const { name, email, avatar, googleId } = req.body;

        let user = await User.findOne({ googleId });

        if (!user) {
            user = await User.create({ name, email, avatar, googleId });
        }

        res.status(200).json({ success: true, user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};