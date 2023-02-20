import { EntityNotFoundError } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";

export default async function deleteUserService(id: string) {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneByOrFail({ id: id });

    await userRepository.delete(id);

    return user;
  } catch (err) {
    if (err instanceof EntityNotFoundError) {
      throw new AppError("User not found", 404);
    } else {
      throw new AppError("Internal error", 500);
    }
  }
}
