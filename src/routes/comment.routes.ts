import { Router } from "express";
import deleteCommentController from "../controllers/comments/comment.delete.controller";
import listDetailsCommentController from "../controllers/comments/comment.listDetails.controller";
import updateCommentController from "../controllers/comments/comment.update.controller";
import authUserMiddleware from "../middlewares/auth.user.middleware";

const commentsRoutes = Router();

commentsRoutes.get("/:id", listDetailsCommentController);
commentsRoutes.patch("/:id", authUserMiddleware, updateCommentController);
commentsRoutes.delete("/:id", authUserMiddleware, deleteCommentController);

export default commentsRoutes;
