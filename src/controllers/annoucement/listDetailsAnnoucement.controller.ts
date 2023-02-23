import listDetailsAnnoucementsService from "../../services/annoucement/listDetailsAnnoucement.services";
import { Request, Response } from "express";

const listDetailsAnnoucementController = async (
  req: Request,
  res: Response
) => {
  const { annoucementId } = req.params;
  const annoucement = await listDetailsAnnoucementsService(annoucementId);

  return res.status(200).json(annoucement);
};

export default listDetailsAnnoucementController;
