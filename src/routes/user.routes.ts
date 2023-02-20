import { Router } from "express"
import createUserController from "../controllers/user/user.create.controller"

const userRoutes = Router()

userRoutes.post("", createUserController)


export default userRoutes