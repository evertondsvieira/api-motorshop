import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { User } from "../../entities/user.entity";
import { IComment } from "../../interfaces/comment";
import { Comments } from "../../entities/comments.entity";
import { Annoucements } from "../../entities/annoucements.entity";

async function createCommentService(
  data: IComment,
  id: string,
  idAnnouncement: string
) {
  const commentRepository = AppDataSource.getRepository(Comments);
  const userRepository = AppDataSource.getRepository(User);
  const announcementRepository = AppDataSource.getRepository(Annoucements);
  const user = await userRepository.findOne({
    where: { id: id },
  });
  const announcement = await announcementRepository.findOne({
    where: {
      annoucementId: idAnnouncement,
    },
  });

  if (!user) {
    throw new AppError("User not found", 404);
  }

  if (!announcement) {
    throw new AppError("Announcement not found", 404);
  }

  if (!data.text) {
    throw new AppError("Text field is required");
  }

  const comment = commentRepository.create(data);

  comment.user = user;
  comment.annoucements = announcement;

  await commentRepository.save(comment);

  const resComment = await commentRepository.findOne({
    where: { id: comment.id },
  });
  return resComment;
}

export default createCommentService;
