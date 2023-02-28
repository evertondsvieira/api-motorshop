import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrorMidleware } from "./middlewares/handleError.midleware";
import userRoutes from "./routes/user.routes";
import loginRoutes from "./routes/session.routes";
import announcementsRoutes from "./routes/annoucements.routes";
import addressRoutes from "./routes/address.routes";
import authUserMiddleware from "./middlewares/auth.user.middleware";
import commentsRoutes from "./routes/comments.routes";

const app = express();
app.use(express.json());
app.use("/users", userRoutes);
app.use("/users/address", authUserMiddleware, addressRoutes);
app.use("/login", loginRoutes);
app.use("/announcements", announcementsRoutes);
app.use("/comments", commentsRoutes);
app.use(handleErrorMidleware);

export default app;
