import { AppDataSource } from "../../data-source";
import { Annoucements } from "../../entities/annoucements.entity";
import { Comments } from "../../entities/comments.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";

export default async function deleteCommentService(
  id: string,
  idComment: string
) {
  const commentRepository = AppDataSource.getRepository(Comments);
  const adRepository = AppDataSource.getRepository(Annoucements);
  const userRepository = AppDataSource.getRepository(User);
  const comment = await commentRepository.findOne({
    where: { id: idComment },
    relations: { user: true },
  });
  const user = await userRepository.findOne({
    where: { id: id },
  });

  if (id !== comment?.user.id) {
    throw new AppError("Comment not found", 404);
  }

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return await commentRepository.delete(idComment);
}
