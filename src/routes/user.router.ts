import { Router } from "express";
import createUserController from "../controllers/user/user.create.controller";
import listDetailsUserController from "../controllers/user/user.listDetails.controller";

const userRouters = Router();

userRouters.get("/:id", listDetailsUserController);
userRouters.post("", createUserController);
userRouters.patch("");
userRouters.delete("");

export default userRouters;
