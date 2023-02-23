import { Request, Response } from "express";
import createAnnoucementService from "../../services/annoucement/createAnnoucement.service";

const createAnnoucementController = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const data = req.body;

  const annoucement = await createAnnoucementService(data, userId);

  return res.status(201).json(annoucement);
};

export default createAnnoucementController;