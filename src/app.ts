import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrorMidleware } from "./middlewares/handleError.midleware";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use(handleErrorMidleware);

export default app;
