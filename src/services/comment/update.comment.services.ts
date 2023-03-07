import { AppDataSource } from "../../data-source";
import { Annoucements } from "../../entities/annoucements.entity";
import { Comments } from "../../entities/comments.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IComment } from "../../interfaces/comment";

export default async function updateCommentService(
  data: IComment,
  id: string,
  idComment: string
) {
  const commentRepository = AppDataSource.getRepository(Comments);
  const userRepository = AppDataSource.getRepository(User);
  const comment = await commentRepository.findOne({
    where: { id: idComment },
    relations: { user: true },
  });
  const user = await userRepository.findOne({
    where: { id: id },
  });

  if (Object.keys(data).length > 0) {
    const fields = ["text"];
    const keys = Object.keys(data);
    const include = keys.map((key) => {
      if (fields.includes(key)) {
        return true;
      }
      return false;
    });

    if (include.includes(true)) {
      if (id !== comment?.user.id) {
        throw new AppError("Comment not found", 404);
      }

      if (!user) {
        throw new AppError("User not found", 404);
      }
    }
  }

  await commentRepository.update(idComment, data);
  const resComment = commentRepository.findOne({ where: { id: idComment } });

  return resComment;
}
