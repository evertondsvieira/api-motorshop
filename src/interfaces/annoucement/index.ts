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
