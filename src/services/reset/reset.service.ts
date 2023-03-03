import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.SECRET_KEY;

export async function resetPassword(
  id: string,
  token: string,
  password: string,
  password2: string
) {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { id: id } });

  if (!user) {
    throw new Error("Id inválido");
  }

  if (!password) {
    throw new Error("field password is required");
  }

  if (!password2) {
    throw new Error("field password2 is required");
  }

  if (password !== password2) {
    throw new Error("password and password2 not match");
  }

  const secret = JWT_SECRET + user.password;
  try {
    const payload = jwt.verify(token, secret);
    const hash = await bcrypt.hash(password, 10);
    user.password = hash;
    await userRepository.save(user);
    return "Senha alterada com sucesso";
  } catch (error) {
    console.log(error.message);
    throw new Error("Token inválido");
  }
}
