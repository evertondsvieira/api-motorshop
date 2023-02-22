import { Router } from "express";
import createAnnoucementController from "../controllers/annoucement/createAnnoucement.controller";

const annoucementRoutes = Router();

annoucementRoutes.post("", createAnnoucementController);

export default annoucementRoutes;
