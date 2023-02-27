import listDetailsAnnoucementsService from "../../services/annoucement/listDetailsAnnoucement.services";
import { Request, Response } from "express";

const listDetailsAnnoucementController = async (
  req: Request,
  res: Response
) => {
  const { id } = req.user;
  const annoucement = await listDetailsAnnoucementsService(id);

  return res.status(200).json(annoucement);
};

export default listDetailsAnnoucementController;
