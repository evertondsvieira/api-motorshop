import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { transporter } from "../../modules/mailer";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.SECRET_KEY;

export async function forgotPassword(email: string) {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.findOne({ where: { email } });

  if (!user) {
    throw new Error("Usuário não registrado");
  }

  const payload = {
    id: user.id,
    email: user.email,
  };

  const secret = JWT_SECRET + user.password;
  const token = jwt.sign(payload, secret, { expiresIn: "10m" });

  const resetLink = `http://localhost:3000/forgot-password/${user.id}/${token}`;

  const mailOptions = {
    from: "Reset Password - Motors Shop",
    to: email,
    subject: "Resetar senha",
    html: `<p>Para resetar a sua senha, clique neste link: <a href="${resetLink}">${resetLink}</a></p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return "O link para resetar a senha foi enviado para o seu e-mail...";
  } catch (error) {
    console.error(error);
    throw new Error("Erro ao enviar o e-mail");
  }
}
