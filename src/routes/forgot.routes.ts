import express from "express";
import { forgotPasswordController } from "../controllers/forgot/forgot.controller";
import { resetPasswordController } from "../controllers/reset/reset.controller";

const routerResetPassword = express.Router();

routerResetPassword.post("/", forgotPasswordController);
routerResetPassword.post("/:id/:token", resetPasswordController);

export default routerResetPassword;
