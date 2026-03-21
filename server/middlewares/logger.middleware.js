import logger from "../config/logger.config.js";

const loggerMiddleware = (req, res, next) => {
    const path = req.path || req.url;

    logger.debug(`${path}`);

    next();
};

export default loggerMiddleware;
