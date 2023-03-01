import { AppDataSource } from "../../data-source";
import { Annoucements } from "../../entities/annoucements.entity";
import { Comments } from "../../entities/comments.entity";
import { AppError } from "../../errors";

export default async function listCommentService(idAnnouncement: string) {
  const announcementRepository = AppDataSource.getRepository(Annoucements);
  const commentsRepository = AppDataSource.getRepository(Comments);
  const announcement = await announcementRepository.findOne({
    where: { annoucementId: idAnnouncement },
  });

  if (!announcement) {
    throw new AppError("Announcement not found", 404);
  }

  const comments = await commentsRepository.find({
    where: { annoucements: announcement },
    relations: { user: true, annoucements: false },
  });

  return comments;
}
