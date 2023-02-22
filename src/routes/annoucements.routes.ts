import { Router } from "express";
import createAnnoucementController from "../controllers/annoucement/createAnnoucement.controller";
import listAnnoucementsController from "../controllers/annoucement/listAnnoucements.controller";
import listDatailsAnnoucementController from "../controllers/annoucement/listDatailsAnnoucement.controller";

const annoucementeRoutes = Router();

annoucementeRoutes.post("/:userId", createAnnoucementController);
annoucementeRoutes.get("/:userId", listAnnoucementsController);
annoucementeRoutes.get("/:annoucementId", listDatailsAnnoucementController)


export default annoucementeRoutes;