import { MigrationInterface, QueryRunner } from "typeorm";

export class changerMaxPriceAnnouncement1677626229781 implements MigrationInterface {
    name = 'changerMaxPriceAnnouncement1677626229781'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "annoucements" ALTER COLUMN "price" TYPE numeric(23,2)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "annoucements" ALTER COLUMN "price" TYPE numeric(24,2)`);
    }

}
