import { IAddress } from "../address";

export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  cpf: string;
  cellPhone: number;
  dateBirth: Date;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  idAdvertiser: boolean;
  address: IAddress;
}

export interface IUser extends IUserRequest {
  id: number;
  addressId: number;
}

export interface IUserLogin {
  email: string;
  password: string;
}
