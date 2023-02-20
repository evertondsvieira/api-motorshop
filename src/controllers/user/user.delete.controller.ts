import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import deleteUserService from "../../services/user/deleteUser.services";

export default async function deleteUserController(
  req: Request,
  res: Response
) {
  const { id } = req.params;
  const user = await deleteUserService(id);
  return res.status(204).json(user);
}
