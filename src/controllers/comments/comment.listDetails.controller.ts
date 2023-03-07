import { Request, Response } from "express";
import listDetailsCommentsService from "../../services/comment/listDetails.comment.services";

const listDetailsCommentController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const comment = await listDetailsCommentsService(id);

  return res.status(200).json(comment);
};

export default listDetailsCommentController;
