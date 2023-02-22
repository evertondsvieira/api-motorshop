import { AppDataSource } from "../../data-source";
import { EntityNotFoundError } from "typeorm";
import { AppError } from "../../errors";
import { Annoucements } from "../../entities/annoucements.entity";


const listDatailsAnnoucementsService = async (id: string) => {
    try {
        const annoucemntRequesty = AppDataSource.getRepository(Annoucements);

        const annoucementsFind = await annoucemntRequesty.findOneBy(
            {
                annoucementId: id
            }
        );

        return annoucementsFind

    } catch (err) {
        if (err instanceof EntityNotFoundError) {
            throw new AppError("Annoucement not found", 404);
        } else {
            throw new AppError("Internal error", 500);
        }
    }
}

export default listDatailsAnnoucementsService;