import { Router } from "express";
import createAnnoucementController from "../controllers/annoucement/createAnnoucement.controller";
import listAnnoucementsController from "../controllers/annoucement/listAnnoucements.controller";
import listDatailsAnnoucementController from "../controllers/annoucement/listDatailsAnnoucement.controller";

const announcementeRoutes = Router();

announcementeRoutes.post("/:userId/annoucements", createAnnoucementController);
announcementeRoutes.get("/:userId/annoucements", listAnnoucementsController);
announcementeRoutes.get("announcements/:annoucementId", listDatailsAnnoucementController)


export default announcementeRoutes;