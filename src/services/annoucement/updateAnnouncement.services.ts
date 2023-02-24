import { AppDataSource } from "../../data-source";
import { Annoucements } from "../../entities/annoucements.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IAnnoucement } from "../../interfaces/annoucement";

const updateAnnoucementService = async (
  id: string,
  idUser: string,
  data: IAnnoucement
) => {
  const annoucementRepository = AppDataSource.getRepository(Annoucements);
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneOrFail({
    where: { id: idUser },
  });
  let annoucement = await annoucementRepository.findOneOrFail({
    where: { annoucementId: id },
    relations: { user: true },
  });

  if (Object.keys(data).length > 0) {
    const fields = [
      "title",
      "adType",
      "year",
      "mileage",
      "price",
      "description",
      "vehicleType",
      "coverImage",
      "isActive",
    ];

    const typeVehicle = ["motocycle", "car"];
    const adType = ["sale", "auction"];

    if (data.vehicleType) {
      if (!typeVehicle.includes(data.vehicleType)) {
        throw new AppError("value in field vehicleType is not valid");
      }
    }

    if (data.adType) {
      if (!adType.includes(data.adType)) {
        throw new AppError("value in field adType is not valid");
      }
    }

    const keys = Object.keys(data);
    const include = keys.map((key) => {
      if (fields.includes(key)) {
        return true;
      }
      return false;
    });

    if (include.includes(true)) {
      if (annoucement.user.id === user.id) {
        await annoucementRepository.update(id, data);
        annoucement = await annoucementRepository.findOneOrFail({
          where: { annoucementId: id },
        });
      }
    }

    annoucement = await annoucementRepository.findOneOrFail({
      where: { annoucementId: id },
      relations: { user: false },
    });

    return annoucement;
  }

  annoucement = await annoucementRepository.findOneOrFail({
    where: { annoucementId: id },
    relations: { user: false },
  });

  return annoucement;
};
export default updateAnnoucementService;
