import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
} from "typeorm";
import { User } from "./user.entity";
import { Annoucements } from "./annoucements.entity";

@Entity("comments")
export class Comments {
  @PrimaryGeneratedColumn("increment")
  readonly id: string;

  @Column({ length: 450 })
  text: string;

  @CreateDateColumn()
  createAt: Date;

  @ManyToOne(() => User, (user) => user.comments, { onDelete: "CASCADE" })
  user: User;

  @ManyToOne(() => Annoucements, (annoucements) => annoucements.comments, {
    onDelete: "CASCADE",
  })
  annoucements: Annoucements;
}
