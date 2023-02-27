import { Request, Response } from "express";
import listAnnoucementsService from "../../services/annoucement/listAnnoucement.services";

const listAnnoucementsController = async (req: Request, res: Response) => {
  const listAnnoucements = await listAnnoucementsService();
  return res.status(200).json(listAnnoucements);
};

export default listAnnoucementsController;
