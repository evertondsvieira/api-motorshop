import { AppDataSource } from "../../data-source";
import { EntityNotFoundError } from "typeorm";
import { AppError } from "../../errors";
import { Annoucements } from "../../entities/annoucements.entity";
import { User } from "../../entities/user.entity";


const listAnnoucementsService = async (id: string) => {
    try {
        const annoucemntRequesty = AppDataSource.getRepository(Annoucements);
        const userRequesty = AppDataSource.getRepository(User);

        const userFind = await userRequesty.findOneBy({ id });

        const annoucements = await annoucemntRequesty.find({
            where: {
                user: userFind!,
            },
        });

        return annoucements

    } catch (err) {
        if (err instanceof EntityNotFoundError) {
            throw new AppError("Annoucement not found", 404);
        } else {
            throw new AppError("Internal error", 500);
        }
    }
}

export default listAnnoucementsService;