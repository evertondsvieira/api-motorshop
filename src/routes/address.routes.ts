import { Router } from "express";
import addressUpdateController from "../controllers/address/address.update.controller";

const addressRoutes = Router();

addressRoutes.patch("", addressUpdateController);

export default addressRoutes;
