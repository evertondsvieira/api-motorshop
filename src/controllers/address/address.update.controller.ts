import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import addressUpdateService from "../../services/address/addressUpdate.services";

export default async function addressUpdateController(
  req: Request,
  res: Response
) {
  console.log(req);
  const { data } = req.body;
  //   const createdUser = await addressUpdateService(id, data);
  //   return res.status(200).json(instanceToPlain(createdUser));
}
