import { getAllSubjectsService } from "../services/subject.service.js";

export const getAllSubjectsController = async (req, res, next) => {
    try {
        const subjects = getAllSubjectsService();
        res.status(200).json({ success: true, subjects });
    } catch (error) {
        next(error);
    }
};