import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.config.js";
import routes from "./routes/api.routes.js";
import logger from "./config/logger.config.js";
dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", routes);

app.listen(process.env.PORT, () => {
    logger.success(`Server running on port ${process.env.PORT}`);
});