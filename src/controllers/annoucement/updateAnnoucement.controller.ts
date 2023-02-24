import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import updateAnnoucementService from "../../services/annoucement/updateAnnouncement.services";

export default async function updateAnnouncementController(
  req: Request,
  res: Response
) {
  const { id: idUser } = req.user;
  const { annoucementId } = req.params;
  const data = req.body;
  const annoucement = await updateAnnoucementService(
    annoucementId,
    idUser,
    data
  );
  return res.status(200).json(instanceToPlain(annoucement));
}
