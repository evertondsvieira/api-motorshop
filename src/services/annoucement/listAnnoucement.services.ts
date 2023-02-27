import { AppDataSource } from "../../data-source";
import { EntityNotFoundError } from "typeorm";
import { AppError } from "../../errors";
import { Annoucements } from "../../entities/annoucements.entity";


const listAnnoucementsService = async () => {
    try {
        const annoucementRepository = AppDataSource.getRepository(Annoucements);

        const announcementsFind = await annoucementRepository.find()

        return announcementsFind

    } catch (err) {
        throw new AppError("Internal error", 500);
    }
}

export default listAnnoucementsService