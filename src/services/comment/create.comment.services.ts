import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { User } from "../../entities/user.entity";
import { IComment } from "../../interfaces/comment";
import { Comments } from "../../entities/comments.entity";

async function createCommentService(data: IComment, id: string) {
  const commentRepository = AppDataSource.getRepository(Comments);
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({
    where: { id: id },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (!data.text) {
    throw new AppError("Text field is required");
  }

  const comment = commentRepository.create(data);

  comment.user = user;

  await commentRepository.save(comment);

  return comment;
}

export default createCommentService;
