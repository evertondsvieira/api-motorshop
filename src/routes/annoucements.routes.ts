import { Router } from "express";
import createAnnoucementController from "../controllers/annoucement/createAnnoucement.controller";
import deleteAnnouncementsController from "../controllers/annoucement/deleteAnnouncement.controller";
import listAnnoucementsController from "../controllers/annoucement/listAnnoucements.controller";
import listDetailsAnnoucementController from "../controllers/annoucement/listDetailsAnnoucement.controller";
import updateAnnouncementController from "../controllers/annoucement/updateAnnoucement.controller";
import authUserMiddleware from "../middlewares/auth.user.middleware";

const announcementsRoutes = Router();

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

export default announcementsRoutes;
