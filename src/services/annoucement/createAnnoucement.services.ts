import { AppDataSource } from "../../data-source";
import { Annoucements } from "../../entities/annoucements.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IAnnoucement } from "../../interfaces/annoucement";

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
  ];
  const typeVehicle = ["motocycle", "car"];
  const adType = ["sale", "auction"];

  const annoucementRepository = AppDataSource.getRepository(Annoucements);
  const userRepository = AppDataSource.getRepository(User);
  const userFind = await userRepository.findOneByOrFail({ id: userId });

  if (userFind.isAdvertiser !== true) {
    throw new Error("you must be a seller to post an announcement", 403);
  }

  fieldsRequireds.map((field) => {
    if (!Object.keys(body).includes(field)) {
      throw new AppError(`${field} is a required field`);
    }
  });

  if (!typeVehicle.includes(body.vehicleType)) {
    throw new AppError("value in field vehicleType is not valid");
  }

  if (!adType.includes(body.adType)) {
    throw new AppError("value in field adType is not valid");
  }

  const annoucement = annoucementRepository.create(body);

  annoucement.user = userFind;

  await annoucementRepository.save(annoucement);

  return annoucement;
};

export default createAnnoucementService;
