import { AppDataSource } from "../../data-source";
import { Comments } from "../../entities/comments.entity";
import { AppError } from "../../errors";

const listDetailsCommentsService = async (id: string) => {
  const commentRepository = AppDataSource.getRepository(Comments);

  const comment = await commentRepository.findOne({
    where: { id: id },
    relations: { user: true },
  });

  if (!comment) {
    throw new AppError("Comment not found", 404);
  }

  return comment;
};

export default listDetailsCommentsService;
