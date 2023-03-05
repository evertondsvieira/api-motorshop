import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import updateCommentService from "../../services/comment/update.comment.services";

export default async function updateCommentController(
  req: Request,
  res: Response
) {
  const { id } = req.user;
  const { idAnnouncement } = req.params;
  const { idComment } = req.params;
  const data = req.body;
  const comment = await updateCommentService(
    data,
    id,
    idAnnouncement,
    idComment
  );
  return res.status(201).json(instanceToPlain(comment));
}
