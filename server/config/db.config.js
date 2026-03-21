import mongoose from 'mongoose';
import logger from './logger.config.js';
import { DB_URL } from './init.config.js';

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL, {
            serverSelectionTimeoutMS: 5000,
            tls: true,
            tlsAllowInvalidCertificates: false,
        });
        logger.success("MongoDB connected");
    } catch (error) {
        logger.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

export default connectDB;