import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import deleteCommentService from "../../services/comment/delete.comment.services";

export default async function deleteCommentController(
  req: Request,
  res: Response
) {
  const { id } = req.user;
  const { idAnnouncement } = req.params;
  const { idComment } = req.params;
  console.log(id);
  console.log(idAnnouncement);
  console.log(idComment);
  const comment = await deleteCommentService(id, idAnnouncement, idComment);
  return res.status(204).json(instanceToPlain(comment));
}
