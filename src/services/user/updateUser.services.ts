import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors";
import { IUserUpdate } from "../../interfaces/user";

const updateUserService = async (data: IUserUpdate, id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ id });

  if (!user) {
    throw new AppError("user not found", 404);
  }

  if (user.email === data.email) {
    delete data.email;
  }

  if (user.cellPhone === data.cellPhone) {
    delete data.cellPhone;
  }

  if (user.cpf === data.cpf) {
    delete data.cpf;
  }

  if (data.cpf) {
    const exist = await userRepository.findOne({ where: { cpf: data.cpf } });
    if (exist) {
      throw new AppError("CPF already exists", 400);
    }
  }

  if (data.email) {
    const exist = await userRepository.findOne({
      where: { email: data.email },
    });
    if (exist) {
      throw new AppError("Email already exists", 400);
    }
  }

  if (data.cellPhone) {
    const exist = await userRepository.findOne({
      where: { cellPhone: data.cellPhone },
    });
    if (exist) {
      throw new AppError("Cellphone already exists", 400);
    }
  }

  const date = String(data.dateBirth);

  let arrDate = date.split("/");
  let strDate = "";
  arrDate = arrDate.reverse();

  if (parseInt(arrDate[1]) > 12 && parseInt(arrDate[1]) < 1) {
    throw new AppError(
      "Provide a datebirth in format dd/mm/aaaa or aaaa/mm/dd"
    );
  }

  arrDate.map((el) => (strDate += `${el},`));
  console.log(strDate);
  const newdate = new Date(strDate);
  console.log(newdate);
  const datetime = newdate.toISOString();

  console.log(datetime);

  data.dateBirth = datetime;

  await userRepository.update(id, data);

  const newUser = await userRepository.findOneBy({ id });

  return newUser;
};

export default updateUserService;
