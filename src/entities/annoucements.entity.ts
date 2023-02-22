import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    OneToMany
} from "typeorm"
import { User } from "./user.entity"
import { Comments } from "./comments.entity"


export type annoucementRoles = "sale" | "auction"

export type vehicleRoles = "car" | "motocycle"


@Entity("annoucements")
export class Annoucements {
    @PrimaryGeneratedColumn("uuid")
    readonly annoucementId: string

    @Column({ length: 50 })
    title: string

    @Column({ default: true })
    isActive: boolean

    @Column({
        type: "enum",
        enum: ["sale", "auction"],
        default: "sale"
    })
    adType: annoucementRoles

    @Column({ type: "int", width: 4 })
    year: number

    @Column({ type: "int", width: 6 })
    mileage: number

    @Column({ type: "decimal", precision: 7, scale: 2 })
    price: number

    @Column({ length: 350 })
    description: string

    @Column({
        type: "enum",
        enum: ["car", "motocycle"],
    })
    vehicleType: vehicleRoles

    @Column()
    coverImage: string

    @ManyToOne(() => User, (user) => user.annoucements)
    user: User

    @OneToMany(() => Comments, (comments) => comments.annoucements)
    comments: Comments[]
}