import { Exclude } from "class-transformer";
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";
import { Address } from "./address.entity";
import { Comments } from "./comments.entity";
import { Annoucements } from "./annoucements.entity";

@Entity("users")
class User {
  @PrimaryGeneratedColumn("increment")
  readonly id: string;

  @Column({ length: 70 })
  name: string;

  @Column({ length: 78, unique: true })
  email: string;

  @Column({ length: 14, unique: true })
  cpf: string;

  @Column({ length: 16, unique: true })
  cellPhone: string;

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

  @OneToMany(() => Annoucements, (annoucement) => annoucement.user, {
    eager: true,
  })
  annoucements: Annoucements[];

  @OneToMany(() => Comments, (comment) => comment.user)
  comments: Comments;
}

export { User };
