import {
    Entity,
    PrimaryGeneratedColumn,
    Column
} from "typeorm"

@Entity("address")

export class Address {
    @PrimaryGeneratedColumn("uuid")
    readonly addressId: string

    @Column({ length: 8 })
    cep: number

    @Column({ length: 2 })
    state: string

    @Column({ length: 30 })
    city: string

    @Column({ length: 50 })
    street: string

    @Column({ length: 6 })
    number: number

    @Column({ length: 200 })
    complement: string
}