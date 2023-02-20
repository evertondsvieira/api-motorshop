import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrorMidleware } from "./middlewares/handleError.midleware";
import userRouters from "./routes/user.router";

const app = express();
app.use(express.json());
app.use("/users", userRouters);
app.use(handleErrorMidleware);

export default app
