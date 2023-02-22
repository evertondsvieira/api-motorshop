import { MigrationInterface, QueryRunner } from "typeorm";

export class typeIdAnnouncement1677090364960 implements MigrationInterface {
    name = 'typeIdAnnouncement1677090364960'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_2ebda046dc1b98f51bc92d4c53c"`);
        await queryRunner.query(`ALTER TABLE "annoucements" DROP CONSTRAINT "PK_2b75bf7102ce639a5a9cd9ca817"`);
        await queryRunner.query(`ALTER TABLE "annoucements" DROP COLUMN "annoucementId"`);
        await queryRunner.query(`ALTER TABLE "annoucements" ADD "annoucementId" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "annoucements" ADD CONSTRAINT "PK_2b75bf7102ce639a5a9cd9ca817" PRIMARY KEY ("annoucementId")`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "annoucementsAnnoucementId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "annoucementsAnnoucementId" integer`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_2ebda046dc1b98f51bc92d4c53c" FOREIGN KEY ("annoucementsAnnoucementId") REFERENCES "annoucements"("annoucementId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_2ebda046dc1b98f51bc92d4c53c"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "annoucementsAnnoucementId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "annoucementsAnnoucementId" uuid`);
        await queryRunner.query(`ALTER TABLE "annoucements" DROP CONSTRAINT "PK_2b75bf7102ce639a5a9cd9ca817"`);
        await queryRunner.query(`ALTER TABLE "annoucements" DROP COLUMN "annoucementId"`);
        await queryRunner.query(`ALTER TABLE "annoucements" ADD "annoucementId" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "annoucements" ADD CONSTRAINT "PK_2b75bf7102ce639a5a9cd9ca817" PRIMARY KEY ("annoucementId")`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_2ebda046dc1b98f51bc92d4c53c" FOREIGN KEY ("annoucementsAnnoucementId") REFERENCES "annoucements"("annoucementId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
