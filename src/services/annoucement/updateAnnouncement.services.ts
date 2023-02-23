import { AppDataSource } from "../../data-source";
import { Annoucements } from "../../entities/annoucements.entity";
import { User } from "../../entities/user.entity";
import { IAnnoucement } from "../../interfaces/annoucement";

const updateAnnoucementService = async (
  id: string,
  idUser: string,
  data: IAnnoucement
) => {
  const annoucementRepository = AppDataSource.getRepository(Annoucements);
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOneOrFail({ where: { id: idUser } });
  let annoucement = await annoucementRepository.findOneOrFail({
    where: { annoucementId: id },
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

    const keys = Object.keys(data);
    const include = keys.map((key) => {
      if (fields.includes(key)) {
        return true;
      }
      return false;
    });

    if (include.includes(true)) {
      if (user.id === annoucement.user.id) {
        await annoucementRepository.update(user.address.id, data);
        annoucement = await annoucementRepository.findOneOrFail({
          where: { annoucementId: id },
        });
      }
    }

    return annoucement;
  }

  return annoucement;
};
export default updateAnnoucementService;
