import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    avatar: {
        type: String,
    },
    googleId: {
        type: String,
        required: true,
        unique: true,
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    role: {
        type: String,
        enum: ["student", "admin"],
        default: "student",
    },
}, { timestamps: true });

export default mongoose.model('User', userSchema);