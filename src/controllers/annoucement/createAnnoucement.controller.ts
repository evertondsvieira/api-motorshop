import { Request, Response } from "express";
import createAnnoucementService from "../../services/annoucements/createAnnoucements";

const createAnnoucementController = async (req: Request, res: Response) => {
  const id = req.user.id;
  const data = req.body;

  const annoucement = await createAnnoucementService(data, id);

  return res.status(201).json(annoucement);
};

export default createAnnoucementController;