import { AppDataSource } from "../../data-source";
import { Address } from "../../entities/address.entity";
import { AppError } from "../../errors";
import { IAddress } from "../../interfaces/address";

export default async function addressUpdateService(id: string, data: IAddress) {
  const addressRepository = AppDataSource.getRepository(Address);

  if (data.cep) {
    const regex = /^(\d{5}-\d{3})|(\d{8})$/;

    if (!regex.test(data.cep)) {
      throw new AppError(
        "provide a valid cep, in format XXXXX-XXX or XXXXXXXX"
      );
    }
  }

  const address = await addressRepository.update(id, data);

  return address;
}
