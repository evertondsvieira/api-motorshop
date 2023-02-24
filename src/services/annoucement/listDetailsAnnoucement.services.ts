import { AppDataSource } from "../../data-source";
import { EntityNotFoundError } from "typeorm";
import { AppError } from "../../errors";
import { Annoucements } from "../../entities/annoucements.entity";

const listDetailsAnnoucementsService = async (id: string) => {
  const annoucemntRequesty = AppDataSource.getRepository(Annoucements);

  const annoucementsFind = await annoucemntRequesty.findOne({
    where: {
      annoucementId: id,
    },
    relations: { user: true },
  });

  if (!annoucementsFind) {
    throw new AppError("Annoucement not found", 404);
  }

  return annoucementsFind;
};

export default listDetailsAnnoucementsService;
