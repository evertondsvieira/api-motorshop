import { AppDataSource } from "../../data-source";
import { Annoucements } from "../../entities/annoucements.entity";
import { User } from "../../entities/user.entity";
import { IAnnoucementRequest } from "../../interfaces/annoucements";

const createAnnoucementService = async (
  data: IAnnoucementRequest,
  id: string
) => {
  const annoucementRepository = AppDataSource.getRepository(Annoucements);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  const newAnnoucement = new Annoucements();

  newAnnoucement.title = data.title;
  newAnnoucement.isActive = data.isActive;
  newAnnoucement.year = data.year;
  newAnnoucement.mileage = data.mileage;
  newAnnoucement.price = data.price;
  newAnnoucement.description = data.description;
  newAnnoucement.vehicleType = data.vehicleType;
  newAnnoucement.coverImage = data.coverImage;

  annoucementRepository.create(newAnnoucement);
  await annoucementRepository.save(newAnnoucement);

  return newAnnoucement;
};

export default createAnnoucementService;
