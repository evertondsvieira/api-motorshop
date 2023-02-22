import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1677089430604 implements MigrationInterface {
    name = 'initial1677089430604'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."annoucements_adtype_enum" AS ENUM('sale', 'auction')`);
        await queryRunner.query(`CREATE TYPE "public"."annoucements_vehicletype_enum" AS ENUM('car', 'motocycle')`);
        await queryRunner.query(`CREATE TABLE "annoucements" ("annoucementId" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying(50) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "adType" "public"."annoucements_adtype_enum" NOT NULL DEFAULT 'sale', "year" integer NOT NULL, "mileage" integer NOT NULL, "price" numeric(7,2) NOT NULL, "description" character varying(350) NOT NULL, "vehicleType" "public"."annoucements_vehicletype_enum" NOT NULL, "coverImage" character varying NOT NULL, "userId" integer, CONSTRAINT "PK_2b75bf7102ce639a5a9cd9ca817" PRIMARY KEY ("annoucementId"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("commentId" uuid NOT NULL DEFAULT uuid_generate_v4(), "comment" character varying(450) NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "annoucementsAnnoucementId" uuid, CONSTRAINT "PK_b302f2e474ce2a6cbacd7981aa5" PRIMARY KEY ("commentId"))`);
        await queryRunner.query(`ALTER TABLE "annoucements" ADD CONSTRAINT "FK_c609064c91ed6d46ab2c9b8b5e7" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_2ebda046dc1b98f51bc92d4c53c" FOREIGN KEY ("annoucementsAnnoucementId") REFERENCES "annoucements"("annoucementId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_2ebda046dc1b98f51bc92d4c53c"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "annoucements" DROP CONSTRAINT "FK_c609064c91ed6d46ab2c9b8b5e7"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "annoucements"`);
        await queryRunner.query(`DROP TYPE "public"."annoucements_vehicletype_enum"`);
        await queryRunner.query(`DROP TYPE "public"."annoucements_adtype_enum"`);
    }

}
