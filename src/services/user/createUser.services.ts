import { AppDataSource } from "../../data-source";
import { hash } from "bcryptjs";
import { AppError } from "../../errors";
import { IUserRequest } from "../../interfaces/user";
import { Address } from "../../entities/address.entity";
import { User } from "../../entities/user.entity";

export default async function createUserService(body: IUserRequest) {
  const fieldsRequireds = [
    "name",
    "email",
    "password",
    "cellPhone",
    "cpf",
    "dateBirth",
    "description",
    "address",
  ];

  const arrayStates = [
    "AC",
    "AL",
    "AP",
    "AM",
    "BA",
    "CE",
    "DF",
    "ES",
    "GO",
    "MA",
    "MT",
    "MS",
    "MG",
    "PA",
    "PB",
    "PR",
    "PE",
    "PI",
    "RJ",
    "RN",
    "RS",
    "RO",
    "RR",
    "SC",
    "SP",
    "SE",
    "TO",
  ];

  const fieldsAddressRequireds = ["cep", "state", "city", "street", "number"];
  const userRepository = AppDataSource.getRepository(User);

  fieldsRequireds.map((field) => {
    if (!Object.keys(body).includes(field)) {
      throw new AppError(`${field} is a required field`);
    }
  });

  fieldsAddressRequireds.map((field) => {
    if (!Object.keys(body.address).includes(field)) {
      throw new AppError(`${field} is a required field`);
    }
  });

  if (!arrayStates.includes(body.address.state)) {
    throw new AppError(`${body.address.state} not a valid UF`);
  }

  if (body.email) {
    const regex =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/gi;

    if (!regex.test(body.email)) {
      throw new AppError("provide a valid email");
    }
  }

  // if (body.cellPhone) {
  //   const regex =
  //     /(10)|([1-9][1-9])?(?:(10)|([1-9][1-9])(9[0-9]{4})|([1-9]{2})(9)([0-9]{4}))([0-9]{4})/g;

  //   if (!regex.test(body.cellPhone)) {
  //     throw new AppError("provide a valid phone, in format (XX) 9XXXX-XXXX");
  //   }
  // }

  if (body.cpf) {
    const regex = /^(\d{3}\.){2}\d{3}-\d{2}$/g;

    if (!regex.test(body.cpf)) {
      throw new AppError("provide a valid cpf, in format XXX.XXX.XXX-XX");
    }
  }

  const date = String(body.dateBirth);

  let arrDate = date.split("/");
  let strDate = "";
  arrDate = arrDate.reverse();

  if (parseInt(arrDate[1]) > 12 && parseInt(arrDate[1]) < 1) {
    throw new AppError(
      "Provide a datebirth in format dd/mm/aaaa or aaaa/mm/dd"
    );
  }

  arrDate.map((el) => (strDate += `${el},`));

  const newdate = new Date(strDate);
  const datetime = newdate.toISOString();

  if (body.address.cep) {
    const regex = /^(\d{5}-\d{3})|(\d{8})$/;

    if (!regex.test(body.address.cep)) {
      throw new AppError(
        "provide a valid cep, in format XXXXX-XXX or XXXXXXXX"
      );
    }
  }

  const cpfAlreadyExists = await userRepository.findOneBy({
    cpf: body.cpf,
  });

  if (cpfAlreadyExists) {
    throw new AppError("CPF already exists", 400);
  }

  const cellphoneAlreadyExists = await userRepository.findOneBy({
    cellPhone: body.cellPhone,
  });

  if (cellphoneAlreadyExists) {
    throw new AppError("Cellphone already exists", 400);
  }

  const emailAlreadyExists = await userRepository.findOneBy({
    email: body.email,
  });

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 400);
  }

  const hashedPassword = await hash(body.password, 10);

  const addressRepository = AppDataSource.getRepository(Address);

  const address = addressRepository.create(body.address);

  await addressRepository.save(address);

  body.dateBirth = datetime;

  const user = userRepository.create(body);

  user.password = hashedPassword;

  user.address = address;

  await userRepository.save(user);

  return user;
}
