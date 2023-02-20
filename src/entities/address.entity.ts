import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("increment")
  readonly id: string;

  @Column({ length: 8 })
  cep: string;

  @Column({ length: 2 })
  state: string;

  @Column({ length: 30 })
  city: string;

  @Column({ length: 50 })
  street: string;

  @Column({})
  number: number;

  @Column({ length: 200, nullable: true })
  complement: string;
}

export { Address };
