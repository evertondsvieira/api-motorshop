import { Annoucements } from "../../entities/annoucements.entity";
import { IAnnoucement, IAnnoucementRequest } from "../../interfaces/annoucement";
import { EntityNotFoundError } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";


const createAnnoucementService = async (body: IAnnoucement, id: string) => {
    try {

        const fieldsRequireds = [
            "title",
            "adType",
            "year",
            "mileage",
            "price",
            "description",
            "vehicleType",
            "coverImage",
        ]

        const annoucementRepository = AppDataSource.getRepository(Annoucements)
        const userRepository = AppDataSource.getRepository(User)

        const userFind = await userRepository.findOneByOrFail({
            id: id,
        });

        fieldsRequireds.map((field) => {
            if (!Object.keys(body).includes(field)) {
                throw new AppError(`${field} is a required field`)
            }
        })

        const annoucement = await annoucementRepository.save(
            {
                ...body,
                user: userFind!
            }
        )

        return annoucement

    } catch (err) {
        if (err instanceof EntityNotFoundError) {
            throw new AppError("User not found", 404);
        } else {
            throw new AppError("Internal error", 500);
        }
    }
}

export default createAnnoucementService