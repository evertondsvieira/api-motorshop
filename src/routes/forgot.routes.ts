import express from "express";
import { forgotPasswordController } from "../controllers/forgot/forgot.controller";
import { resetPasswordController } from "../controllers/reset/reset.controller";

const router = express.Router();

router.post("/", forgotPasswordController);
router.post("/:id/:token", resetPasswordController);

export default router;