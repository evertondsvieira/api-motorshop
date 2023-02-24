import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { User } from "./user.entity";
import { Comments } from "./comments.entity";

@Entity("annoucements")
export class Annoucements {
  @PrimaryGeneratedColumn("increment")
  readonly annoucementId: string;

  @Column({ length: 50 })
  title: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({
    type: "enum",
    enum: ["sale", "auction"],
    default: "sale",
  })
  adType: string;

  @Column({ type: "int", width: 4 })
  year: number;

  @Column({ type: "int", width: 6 })
  mileage: number;

  @Column({ type: "decimal", precision: 7, scale: 2 })
  price: number;

  @Column({ length: 350 })
  description: string;

  @Column({
    type: "enum",
    enum: ["car", "motocycle"],
  })
  vehicleType: string;

  @Column()
  coverImage: string;

  @ManyToOne(() => User, (user) => user.annoucements)
  @JoinColumn({ name: "user_id" })
  user: User;

  @OneToMany(() => Comments, (comments) => comments.annoucements)
  comments: Comments[];
}
