import { AppDataSource } from "../../data-source";
import { Annoucements } from "../../entities/annoucements.entity";
import { User } from "../../entities/user.entity";
import { IAnnoucement } from "../../interfaces/annoucement";
import { AppError } from "../../errors";


const createAnnoucementService = async (body: IAnnoucement, userId: string) => {
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

    const userFind = await userRepository.findOneBy({ id: userId })

    fieldsRequireds.map((field) => {
        if (!Object.keys(body).includes(field)) {
            throw new AppError(`${field} is a required field`)
        }
    })

    const annoucement = annoucementRepository.create({ ...body, user: userFind! })

    await annoucementRepository.save(annoucement)

    return annoucement
}

export default createAnnoucementService