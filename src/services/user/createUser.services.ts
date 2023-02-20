import { AppDataSource } from "../../data-source";
import { hash } from "bcryptjs";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IUserRequest } from "../../interfaces/user";
import { Address } from "../../entities/address.entity";

export default async function createUserService(body: IUserRequest) {
  const fieldsRequireds = [
    "name",
    "email",
    "password",
    "cellPhone",
    "cpf",
    "createdAt",
    "dateBirth",
    "description",
    "idAdvertiser",
    "isActive",
    "updatedAt",
    "address",
  ];

  const fieldsAddressRequireds = ["cep", "state", "city", "street", "number"];
  const userRepository = AppDataSource.getRepository(User);

  fieldsRequireds.map((field) => {
    if (!(field in Object.keys(body))) {
      throw new AppError(`${field} is not a required field`);
    }
  });

  fieldsAddressRequireds.map((field) => {
    if (!(field in Object.keys(body.address))) {
      throw new AppError(`${field} is not a required field`);
    }
  });

  const emailAlreadyExists = await userRepository.findOneBy({
    email: body.email,
  });

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 400);
  }

  const hashedPassword = await hash(body.password, 10);

  const addressRepository = AppDataSource.getRepository(Address);

  const user = userRepository.create(body);

  user.address = addressRepository.create(user.address);

  await userRepository.save(user);

  return user;
}
