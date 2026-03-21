import { ApiError } from "../utils/error.util.js";

const reqBodyMiddleware = (req, res, next) => {
    if (!req.body || Object.keys(req.body).length === 0) {
        return next(new ApiError(400, "Request body is empty"));
    } else {
        next();
    }
};

export default reqBodyMiddleware;
