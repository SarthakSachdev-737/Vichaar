import mongoose from 'mongoose';

const sessionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['ongoing', 'completed'],
        default: 'ongoing',
    },
    evaluation: {
        score: { type: Number },
        strengths: [{ type: String }],
        weaknesses: [{ type: String }],
        summary: { type: String },
    },
}, { timestamps: true });

export default mongoose.model('Session', sessionSchema);