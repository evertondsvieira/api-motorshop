import { MigrationInterface, QueryRunner } from "typeorm";

export class changerFieldIdComment1677581525321 implements MigrationInterface {
    name = 'changerFieldIdComment1677581525321'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "comments" RENAME COLUMN "commentId" TO "id"`);
        await queryRunner.query(`ALTER TABLE "comments" RENAME CONSTRAINT "PK_b302f2e474ce2a6cbacd7981aa5" TO "PK_8bf68bc960f2b69e818bdb90dcb"`);
        await queryRunner.query(`ALTER SEQUENCE "comments_commentId_seq" RENAME TO "comments_id_seq"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER SEQUENCE "comments_id_seq" RENAME TO "comments_commentId_seq"`);
        await queryRunner.query(`ALTER TABLE "comments" RENAME CONSTRAINT "PK_8bf68bc960f2b69e818bdb90dcb" TO "PK_b302f2e474ce2a6cbacd7981aa5"`);
        await queryRunner.query(`ALTER TABLE "comments" RENAME COLUMN "id" TO "commentId"`);
    }

}
