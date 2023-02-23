import { Router } from "express";
import createAnnoucementController from "../controllers/annoucement/createAnnoucement.controller";
import listAnnoucementsController from "../controllers/annoucement/listAnnoucements.controller";
import listDatailsAnnoucementController from "../controllers/annoucement/listDetailsAnnoucement.controller";
import updateAnnouncementController from "../controllers/annoucement/updateAnnoucement.controller";
import authUserMiddleware from "../middlewares/auth.user.middleware";

const announcementsRoutes = Router();

announcementsRoutes.post(
  "/:userId",
  authUserMiddleware,
  createAnnoucementController
);
announcementsRoutes.get("/:userId", listAnnoucementsController);
announcementsRoutes.get("/:annoucementId", listDatailsAnnoucementController);
announcementsRoutes.patch(
  "/:annoucementId",
  authUserMiddleware,
  updateAnnouncementController
);

export default announcementsRoutes;
