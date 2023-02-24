import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserLogin } from "../../interfaces/user/index";
import { AppError } from "../../errors";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createSessionService = async (body: IUserLogin) => {
  const fieldsRequireds = ["email", "password"];
  const UserRepository = AppDataSource.getRepository(User);

  try {
    const user = await UserRepository.findOneBy({
      email: body.email,
    });

    fieldsRequireds.map((field) => {
      if (!Object.keys(body).includes(field)) {
        throw new AppError(`${field} is a required field`);
      }
    });

    if (!user) {
      throw new AppError("Invalid email or password");
    }

    const passwordMatch = await compare(body.password, user.password);

    if (!passwordMatch) {
      throw new AppError("Invalid email or password");
    }

    const createdToken = jwt.sign(
      {
        id: user?.id,
        isActive: user.isActive,
        isAdvertiser: user.isAdvertiser,
      },
      process.env.SECRET_KEY as string,
      {
        expiresIn: "24h",
        subject: String(user?.id),
      }
    );

    return { token: createdToken };
  } catch (e) {
    throw new AppError("Invalid email or password");
  }
};

export default createSessionService;
