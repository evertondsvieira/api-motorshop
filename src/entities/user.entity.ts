import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    OneToOne,
    JoinColumn,
    OneToMany
} from "typeorm"
import { Exclude } from "class-transformer"
import { Address } from "./address.entity"
import { Annoucements } from "./annoucements.entity"
import { Comments } from "./comments.entity"


@Entity("user")

export class User {
    @PrimaryGeneratedColumn("uuid")
    readonly userId: string

    @Column({ length: 70 })
    name: string

    @Column({ length: 78, unique: true })
    email: string

    @Column({ length: 14 })
    cpf: string

    @Column({ length: 11 })
    cellPhone: number

    @Column({ type: "date" })
    dateBith: string

    @CreateDateColumn()
    createAt: Date

    @CreateDateColumn()
    updateAt: Date

    @Column({ length: 350 })
    description: string

    @Column({ default: true })
    isActive: boolean

    @Column({ length: 150 })
    @Exclude()
    password: string

    @Column({ default: true })
    isAdvertiser: boolean

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address

    @OneToMany(() => Annoucements, (annoucements) => annoucements.user)
    annoucements: Annoucements[]

    @OneToMany(() => Comments, (comments) => comments.user)
    comments: Comments[]
}