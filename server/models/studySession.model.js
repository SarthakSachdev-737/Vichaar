import mongoose from 'mongoose';

const studySessionSchema = new mongoose.Schema({
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
    numQuestions: {
        type: Number,
        default: 6,
    },
    evaluation: {
        score: Number,
        factuality: Number,
        context: Number,
        originality: Number,
        example: Number,
        injection: Boolean,
        feedback: String,
        strengths: [String],
        improvements: [String],
    },
    aiSessionId: {
        type: String,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model('StudySession', studySessionSchema);