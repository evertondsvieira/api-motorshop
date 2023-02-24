import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IUserUpdate } from "../../interfaces/user";

const updateUserService = async (data: IUserUpdate, id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError("user not found", 400);
  }

  await userRepository.update(id, {
    name: data.name ? data.name : user.name,
    email: data.email ? data.email : user.email,
    cpf: data.cpf ? data.cpf : user.cpf,
    dateBirth: data.dateBirth ? data.dateBirth : user.dateBirth,
    description: data.description ? data.description : user.description,
  });

  const newUser = await userRepository.findOneBy({ id });

  return newUser;
};

export default updateUserService;
