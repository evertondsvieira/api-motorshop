import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/user/index";
import { AppError } from "../../errors";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createSessionService = async (body: IUserLogin) => {
  const UserRepository = AppDataSource.getRepository(User);

  const user = await UserRepository.findOneBy({
    email: body.email,
  });

  if (!user) {
    throw new AppError("Invalid email or password");
  }

  const passwordMatch = await compare(body.password, user.password!);

  if (!passwordMatch) {
    throw new AppError("Invalid email or password");
  }

  const createdToken = jwt.sign(
    {
      userId: user.id,
      isActive: user.isActive,
      isAdvertiser: user.isAdvertiser,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  );

  return { token: createdToken };
};

export default createSessionService;
