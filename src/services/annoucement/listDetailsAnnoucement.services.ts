import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";
import { Annoucements } from "../../entities/annoucements.entity";
import { IAnnouncementResponse } from "../../interfaces/annoucement";

const listDetailsAnnoucementsService = async (id: string) => {
  const announcementRepository = AppDataSource.getRepository(Annoucements);

  const announcement: IAnnouncementResponse | null =
    await announcementRepository.findOne({
      where: { annoucementId: id },
      relations: { user: true },
    });

  delete announcement?.user.password;

  if (!announcement) {
    throw new AppError("Announcement not found", 404);
  }

  return announcement;
};

export default listDetailsAnnoucementsService;
