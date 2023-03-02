import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { User } from "./user.entity";
@Entity("addresses")
class Address {
  @PrimaryGeneratedColumn("increment")
  readonly id: string;
  @Column({ length: 9 })
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
  @OneToOne((type) => User, (user) => user.address, {
    onDelete: "CASCADE",
  })
  @JoinColumn()
  user: User;
}
export { Address };