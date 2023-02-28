import { AppDataSource } from "../../data-source";
import { EntityNotFoundError } from "typeorm";
import { AppError } from "../../errors";
import { Annoucements } from "../../entities/annoucements.entity";

const listDetailsAnnoucementsService = async (id: string) => {
  const announcementRepository = AppDataSource.getRepository(Annoucements);

  const announcement = await announcementRepository.findOne({
    where: { annoucementId: id },
  });

  if (!announcement) {
    throw new AppError("Announcement not found", 404);
  }

  return announcement;
};

export default listDetailsAnnoucementsService;
