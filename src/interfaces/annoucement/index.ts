import { IAddress } from "../address";

export interface IUser {
  name: string;
  email: string;
  password?: string;
  cpf: string;
  cellPhone: string;
  dateBirth: Date | string | number;
  description: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  address: IAddress;
}

export interface IAnnoucementRequest {
  title: string;
  isActive: boolean;
  adType: string;
  year: number;
  mileage: number;
  price: number;
  description: string;
  vehicleType: string;
  coverImage: string;
}

export interface IAnnoucement extends IAnnoucementRequest {
  id: string;
  userId: number;
}

export interface IAnnouncementResponse extends IAnnoucementRequest {
  user: IUser;
}
