import { Exclude } from "class-transformer";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";
import { Address } from "./address.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  readonly id: string;

  @Column({ length: 70 })
  name: string;

  @Column({ length: 78, unique: true })
  email: string;

  @Column({ length: 14 })
  cpf: string;

  @Column({ length: 11 })
  cellPhone: number;

  @Column({ length: 350 })
  description: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ length: 150 })
  @Exclude()
  password: string;

  @Column({ default: false })
  isAdvertiser: boolean;

  @OneToOne((type) => Address, (user) => User, {
    eager: true,
  })
  @JoinColumn()
  address: Address;
}

export { User };
