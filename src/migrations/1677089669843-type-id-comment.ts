import { MigrationInterface, QueryRunner } from "typeorm";

export class typeIdComment1677089669843 implements MigrationInterface {
    name = 'typeIdComment1677089669843'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "PK_b302f2e474ce2a6cbacd7981aa5"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "commentId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "commentId" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "PK_b302f2e474ce2a6cbacd7981aa5" PRIMARY KEY ("commentId")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" DROP CONSTRAINT "PK_b302f2e474ce2a6cbacd7981aa5"`);
        await queryRunner.query(`ALTER TABLE "comments" DROP COLUMN "commentId"`);
        await queryRunner.query(`ALTER TABLE "comments" ADD "commentId" uuid NOT NULL DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "comments" ADD CONSTRAINT "PK_b302f2e474ce2a6cbacd7981aa5" PRIMARY KEY ("commentId")`);
    }

}
