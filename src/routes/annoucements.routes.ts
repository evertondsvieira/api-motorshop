import { Router } from "express";
import createAnnoucementController from "../controllers/annoucement/createAnnoucement.controller";
import listAnnoucementsController from "../controllers/annoucement/listAnnoucements.controller";
import listDatailsAnnoucementController from "../controllers/annoucement/listDetailsAnnoucement.controller";
import updateAnnouncementController from "../controllers/annoucement/updateAnnoucement.controller";
import authUserMiddleware from "../middlewares/auth.user.middleware";

const annoucementeRoutes = Router();

annoucementeRoutes.post(
  "/:userId",
  authUserMiddleware,
  createAnnoucementController
);
annoucementeRoutes.get("/:userId", listAnnoucementsController);
annoucementeRoutes.get("/:annoucementId", listDatailsAnnoucementController);
annoucementeRoutes.patch(
  "/:annoucementId",
  authUserMiddleware,
  updateAnnouncementController
);

export default annoucementeRoutes;
