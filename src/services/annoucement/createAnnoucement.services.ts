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
  const userFind = await userRepository.findOne({ where: { id: userId } });

  if (!userFind) {
    throw new AppError("User not found", 404);
  }

  if (userFind.isAdvertiser !== true) {
    throw new AppError("you must be a seller to post an announcement", 400);
  }

  if (body.price > 99999999999999999999.99) {
    throw new AppError(
      "price cannot be more than 99999999999999999999.99",
      400
    );
  }

  fieldsRequireds.map((field) => {
    if (!Object.keys(body).includes(field)) {
      throw new AppError(`${field} is a required field`);
    }
  });

  if (body.coverImage.length === 0) {
    throw new AppError(`coverImage is a required field`);
  }

  // if (!body.images || body.images.length === 0) {
  //   body.images = [];
  //   body.images.push(body.coverImage);
  // }

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
