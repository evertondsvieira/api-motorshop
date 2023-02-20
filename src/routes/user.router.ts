import { Router } from "express";
import createUserController from "../controllers/user/user.create.controller";

const userRouters = Router();

userRouters.get("/:id");
userRouters.post("", createUserController);
userRouters.patch("");
userRouters.delete("");

export default userRouters;
