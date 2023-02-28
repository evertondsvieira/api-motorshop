import { Router } from "express";
import createCommentController from "../controllers/comments/comment.create.controller";
import authUserMiddleware from "../middlewares/auth.user.middleware";

const commentsRoutes = Router();

commentsRoutes.get("");
commentsRoutes.post("", authUserMiddleware, createCommentController);

export default commentsRoutes;
