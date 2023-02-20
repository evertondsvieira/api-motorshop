import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    ManyToOne
} from "typeorm"
import { User } from "./user.entity"
import { Annoucements } from "./annoucements.entity"


@Entity("comments")
export class Comments {
    @PrimaryGeneratedColumn("uuid")
    readonly commentId: string

    @Column({ length: 450 })
    comment: string

    @CreateDateColumn()
    createAt: Date

    @ManyToOne(() => User, (user) => user.comments)
    user: User

    @ManyToOne(() => Annoucements, (annoucements) => annoucements.comments)
    annoucements: Annoucements
}