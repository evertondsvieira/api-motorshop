import { Router } from "express";
import createAnnoucementController from "../controllers/annoucement/createAnnoucement.controller";


const annoucementeRoutes = Router();

annoucementeRoutes.post("/:userId", createAnnoucementController);


export default annoucementeRoutes;