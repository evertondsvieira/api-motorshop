import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createCommentService from "../../services/comment/create.comment.services";

export default async function createCommentController(
  req: Request,
  res: Response
) {
  const { id } = req.user;
  const { idAnnouncement } = req.params;
  const data = req.body;
  const comment = await createCommentService(data, id, idAnnouncement);
  return res.status(201).json(instanceToPlain(comment));
}
