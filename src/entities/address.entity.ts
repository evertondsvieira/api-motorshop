import { Exclude } from "class-transformer";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("increment")
  readonly id: string;

  @Column({ length: 8 })
  cep: number;

  @Column({ length: 2 })
  state: string;

  @Column({ length: 30 })
  city: string;

  @Column({ length: 50 })
  street: string;

  @Column({ length: 6 })
  number: number;

  @Column({ length: 200, nullable: true })
  complement: string;
}

export { Address };
