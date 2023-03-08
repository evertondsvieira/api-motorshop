import { Router } from "express";
import addressUpdateController from "../controllers/address/address.update.controller";
import createUserController from "../controllers/user/user.create.controller";
import deleteUserController from "../controllers/user/user.delete.controller";
import listDetailsUserController from "../controllers/user/user.listDetails.controller";
import updateUserController from "../controllers/user/user.update.controller";
import authUserMiddleware from "../middlewares/auth.user.middleware";

const userRoutes = Router();

userRoutes.get("/:id", listDetailsUserController);
userRoutes.post("", createUserController);
userRoutes.patch("/address", authUserMiddleware, addressUpdateController);
userRoutes.patch("", authUserMiddleware, updateUserController);
userRoutes.delete("", authUserMiddleware, deleteUserController);

export default userRoutes;
