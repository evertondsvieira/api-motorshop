import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1677196713995 implements MigrationInterface {
    name = 'initial1677196713995'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "addresses" ("id" SERIAL NOT NULL, "cep" character varying(9) NOT NULL, "state" character varying(2) NOT NULL, "city" character varying(30) NOT NULL, "street" character varying(50) NOT NULL, "number" integer NOT NULL, "complement" character varying(200), "userId" integer, CONSTRAINT "REL_95c93a584de49f0b0e13f75363" UNIQUE ("userId"), CONSTRAINT "PK_745d8f43d3af10ab8247465e450" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TYPE "public"."annoucements_adtype_enum" AS ENUM('sale', 'auction')`);
        await queryRunner.query(`CREATE TYPE "public"."annoucements_vehicletype_enum" AS ENUM('car', 'motocycle')`);
        await queryRunner.query(`CREATE TABLE "annoucements" ("annoucementId" SERIAL NOT NULL, "title" character varying(50) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "adType" "public"."annoucements_adtype_enum" NOT NULL DEFAULT 'sale', "year" integer NOT NULL, "mileage" integer NOT NULL, "price" numeric(7,2) NOT NULL, "description" character varying(350) NOT NULL, "vehicleType" "public"."annoucements_vehicletype_enum" NOT NULL, "coverImage" character varying NOT NULL, "user_id" integer, CONSTRAINT "PK_2b75bf7102ce639a5a9cd9ca817" PRIMARY KEY ("annoucementId"))`);
        await queryRunner.query(`CREATE TABLE "comments" ("commentId" SERIAL NOT NULL, "comment" character varying(450) NOT NULL, "createAt" TIMESTAMP NOT NULL DEFAULT now(), "userId" integer, "annoucementsAnnoucementId" integer, CONSTRAINT "PK_b302f2e474ce2a6cbacd7981aa5" PRIMARY KEY ("commentId"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying(70) NOT NULL, "email" character varying(78) NOT NULL, "cpf" character varying(14) NOT NULL, "cellPhone" character varying(16) NOT NULL, "description" character varying(350) NOT NULL, "isActive" boolean NOT NULL DEFAULT true, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "password" character varying(150) NOT NULL, "isAdvertiser" boolean NOT NULL DEFAULT false, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "UQ_24cab4655b223ec39c25e2b7d94" UNIQUE ("cellPhone"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD CONSTRAINT "FK_95c93a584de49f0b0e13f753630" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "annoucements" ADD CONSTRAINT "FK_332a4ca850e1d31ce041d8ea722" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "FK_2ebda046dc1b98f51bc92d4c53c" FOREIGN KEY ("annoucementsAnnoucementId") REFERENCES "annoucements"("annoucementId") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_2ebda046dc1b98f51bc92d4c53c"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "FK_7e8d7c49f218ebb14314fdb3749"`);
        await queryRunner.query(`ALTER TABLE "annoucements" DROP CONSTRAINT "FK_332a4ca850e1d31ce041d8ea722"`);
        await queryRunner.query(`ALTER TABLE "addresses" DROP CONSTRAINT "FK_95c93a584de49f0b0e13f753630"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "comments"`);
        await queryRunner.query(`DROP TABLE "annoucements"`);
        await queryRunner.query(`DROP TYPE "public"."annoucements_vehicletype_enum"`);
        await queryRunner.query(`DROP TYPE "public"."annoucements_adtype_enum"`);
        await queryRunner.query(`DROP TABLE "addresses"`);
    }

}
