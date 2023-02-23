import { Router } from "express";
import createAnnoucementController from "../controllers/annoucement/createAnnoucement.controller";
import deleteAnnouncementsController from "../controllers/annoucement/deleteAnnouncement.controller";

const annoucementRoutes = Router();

annoucementRoutes.post("", createAnnoucementController);
annoucementRoutes.delete("/:id", deleteAnnouncementsController);

export default annoucementRoutes;
