import { Router } from "express";
import createAnnoucementController from "../controllers/annoucement/createAnnoucement.controller";
import deleteAnnouncementsController from "../controllers/annoucement/deleteAnnouncement.controller";
import listAnnoucementsController from "../controllers/annoucement/listAnnoucements.controller";
import listDetailsAnnoucementController from "../controllers/annoucement/listDetailsAnnoucement.controller";
import updateAnnouncementController from "../controllers/annoucement/updateAnnoucement.controller";
import createCommentController from "../controllers/comments/comment.create.controller";
import deleteCommentController from "../controllers/comments/comment.delete.controller";
import listCommentController from "../controllers/comments/comment.list.controller";
import updateCommentController from "../controllers/comments/comment.update.controller";
import authUserMiddleware from "../middlewares/auth.user.middleware";

const announcementsRoutes = Router();

// Rotas CRUD anúncios
announcementsRoutes.post("", authUserMiddleware, createAnnoucementController);
announcementsRoutes.get("", listAnnoucementsController);
announcementsRoutes.get("/:annoucementId", listDetailsAnnoucementController);
announcementsRoutes.delete(
  "/:annoucementId",
  authUserMiddleware,
  deleteAnnouncementsController
);
announcementsRoutes.patch(
  "/:annoucementId",
  authUserMiddleware,
  updateAnnouncementController
);

// Rotas de comentários do anúncio
// POST com autenticação requerida
announcementsRoutes.post(
  "/:idAnnouncement/comments",
  authUserMiddleware,
  createCommentController
);

// GET sem autenticação requerida
announcementsRoutes.get("/:idAnnouncement/comments", listCommentController);

export default announcementsRoutes;
