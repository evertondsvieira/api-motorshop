import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.services";

export default async function createUserController(
  req: Request,
  res: Response
) {
  const user = req.body;
  const createdUser = await createUserService(user);
  return res.status(201).json(instanceToPlain(createdUser));
}
