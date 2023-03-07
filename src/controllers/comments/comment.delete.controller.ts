import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import deleteCommentService from "../../services/comment/delete.comment.services";

export default async function deleteCommentController(
  req: Request,
  res: Response
) {
  const { id } = req.user;
  const { id: idComment } = req.params;
  const comment = await deleteCommentService(id, idComment);
  return res.status(204).json(instanceToPlain(comment));
}
