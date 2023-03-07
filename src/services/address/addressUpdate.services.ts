import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IAddress } from "../../interfaces/address";

export default async function addressUpdateService(id: string, data: IAddress) {
  const addressRepository = AppDataSource.getRepository(Address);
  const userRepository = AppDataSource.getRepository(User);
  let user = await userRepository.findOne({
    where: { id: id },
    relations: { address: true },
  });

  if (Object.keys(data).length > 0) {
    const fields = ["cep", "city", "complement", "state", "street", "number"];
    const keys = Object.keys(data);
    const include = keys.map((key) => {
      if (fields.includes(key)) {
        return true;
      }
      return false;
    });

    if (include.includes(true)) {
      if (data.cep) {
        const regex = /^(\d{5}-\d{3})|(\d{8})$/;

        if (!regex.test(data.cep)) {
          throw new AppError(
            "provide a valid cep, in format XXXXX-XXX or XXXXXXXX"
          );
        }
      }

      if (user) {
        await addressRepository.update(user.address.id, data);
        const resUser = await userRepository.findOne({
          where: { id: user?.id },
          relations: { address: true },
        });
        return resUser;
      }
    }
  }

  const resUser = await userRepository.findOne({
    where: { id: user?.id },
    relations: { address: true },
  });

  return resUser;
}
