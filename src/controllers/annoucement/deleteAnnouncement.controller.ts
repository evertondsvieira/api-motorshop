import { Request, Response } from "express";
import deleteAnnouncementsService from "../../services/annoucement/deleteAnnoucement.services";

const deleteAnnouncementsController = async (req: Request, res: Response) => {
  const id: string = req.params.annoucementId;
  const userId = req.user.id;
  await deleteAnnouncementsService(id, userId);
  return res.status(204).json({ message: "Successfully Deleted" });
};

export default deleteAnnouncementsController;
