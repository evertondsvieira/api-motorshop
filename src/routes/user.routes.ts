import { Router } from "express";
import createUserController from "../controllers/user/user.create.controller";
import deleteUserController from "../controllers/user/user.delete.controller";
import listDetailsUserController from "../controllers/user/user.listDetails.controller";

const userRoutes = Router();

userRoutes.get("/:id", listDetailsUserController);
userRoutes.post("", createUserController);
userRoutes.patch("");
userRoutes.delete("/:id", deleteUserController);

export default userRoutes;
