import { EntityNotFoundError } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";

export default async function listDetailsUserService(id: string) {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: { id: id },
    relations: { annoucements: true },
  });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  return user;
}
