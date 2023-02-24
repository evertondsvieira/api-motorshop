import { EntityNotFoundError } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";

export default async function listDetailsUserService(id: string) {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneOrFail({
    where: { id: id },
    relations: { annoucements: true },
  });

  return user;
}
