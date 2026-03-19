import mongoose from 'mongoose';
import { DB_URL } from './init.config.js';

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL, {
            serverSelectionTimeoutMS: 5000,
            tls: true,
            tlsAllowInvalidCertificates: false,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

export default connectDB;