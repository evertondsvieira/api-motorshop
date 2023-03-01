import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import listCommentService from "../../services/comment/list.comment.services";

export default async function listCommentController(
  req: Request,
  res: Response
) {
  const { idAnnouncement } = req.params;
  const comment = await listCommentService(idAnnouncement);
  return res.status(201).json(instanceToPlain(comment));
}
