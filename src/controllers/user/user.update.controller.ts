import { Request, Response } from "express";
import updateUserService from "../../services/user/updateUser.services";

const updateUserController = async (req: Request, res: Response) => {
  const data = req.body;
  const { id } = req.user;

  const updateUser = await updateUserService(data, id);

  return res.status(200).json(updateUser);
};

export default updateUserController;
