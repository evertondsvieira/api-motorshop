import { AppDataSource } from "../../data-source";
import { Annoucements } from "../../entities/annoucements.entity";
import { AppError } from "../../errors";

const deleteAnnouncementsService = async (id: string, userId: string) => {
  const annoucementsRepository = AppDataSource.getRepository(Annoucements);

  const findAnnoucement = await annoucementsRepository.findOne({
    where: { annoucementId: id },
    relations: { user: true },
  });

  if (!findAnnoucement) {
    throw new AppError("Annoucement not found", 404);
  }

  if (findAnnoucement.user.id !== userId) {
    throw new AppError("Unauthorized", 401);
  }

  await annoucementsRepository.delete(id);

  return "Annoucement deleted with success!";
};

export default deleteAnnouncementsService;
