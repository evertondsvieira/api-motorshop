export interface IAddress {
  cep: number;
  state: string;
  city: string;
  street: string;
  number: number;
  complement?: string;
}

export interface IAddressResponse extends IAddress {
  id: number;
}
