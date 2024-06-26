export interface IAddress {
  cep: string;
  state: string;
  city: string;
  street: string;
  number: number;
  complement?: string;
}

export interface IAddressResponse extends IAddress {
  id: number;
}
