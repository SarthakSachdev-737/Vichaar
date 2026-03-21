import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";
import routes from "./routes/api.routes.js";
import logger from "./config/logger.config.js";
import errorHandlerMiddleware from "./middlewares/error.middleware.js";
import loggerMiddleware from "./middlewares/logger.middleware.js";

dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(loggerMiddleware);
app.use("/api/", routes);
app.use(errorHandlerMiddleware);

app.listen(process.env.PORT, () => {
    logger.success(`Server running on port ${process.env.PORT}`);
});