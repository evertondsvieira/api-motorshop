import { vehicleRoles } from "../../entities/annoucements.entity";

export interface IAnnoucementRequest {
  title: string;
  isActive: boolean;
  year: number;
  mileage: number;
  price: number;
  description: string;
  vehicleType: vehicleRoles;
  coverImage: string;
}

export interface IAnnoucement extends IAnnoucementRequest {
  id: string;
}
