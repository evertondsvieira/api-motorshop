import { AppDataSource } from "../../data-source";
import { EntityNotFoundError } from "typeorm";
import { AppError } from "../../errors";
import { User } from "../../entities/user.entity";


const listAnnoucementsService = async (id: string) => {
    try {
        const userRequesty = AppDataSource.getRepository(User);

        const userFind = await userRequesty.findOneBy({ id });

        return userFind?.annoucements

    } catch (err) {
        if (err instanceof EntityNotFoundError) {
            throw new AppError("Annoucement not found", 404);
        } else {
            throw new AppError("Internal error", 500);
        }
    }
}

export default listAnnoucementsService;