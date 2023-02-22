import { Router } from "express";
import createAnnoucementController from "../controllers/annoucement/createAnnoucement.controller";
import listAnnoucementController from "../controllers/annoucement/listAnnoucements.controller";

const annoucementeRoutes = Router();

annoucementeRoutes.post("/:userId", createAnnoucementController);
annoucementeRoutes.get("/:userId", listAnnoucementController)


export default annoucementeRoutes;