import { Request, Response } from "express";
import listAnnoucementsService from "../../services/annoucement/listAnnoucement.services";

const listAnnoucementsController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const listAnnoucements = await listAnnoucementsService(userId);
  return res.status(200).json(listAnnoucements);
};

export default listAnnoucementsController;
