import { IAddress } from "../address";

export interface IUserRequest {
  name: string;
  email: string;
  password: string;
  cpf: string;
  cellPhone: string;
  dateBirth: Date | string | number;
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

export interface IUserUpdate {
  name?: string;
  email?: string;
  cpf?: string;
  cellPhone?: string;
  dateBirth?: Date;
  description?: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
