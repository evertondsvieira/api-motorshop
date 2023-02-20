import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listDetailsUserService from "../../services/user/listDetailsUser.services";

export default async function listDetailsUserController(
  req: Request,
  res: Response
) {
  const { id } = req.params;
  const listDetailsUser = await listDetailsUserService(id);
  return res.status(200).json(instanceToPlain(listDetailsUser));
}
