import { MigrationInterface, QueryRunner } from "typeorm";

export class newUniqueFields1676902884541 implements MigrationInterface {
    name = 'newUniqueFields1676902884541'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_24cab4655b223ec39c25e2b7d94" UNIQUE ("cellPhone")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_24cab4655b223ec39c25e2b7d94"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_230b925048540454c8b4c481e1c"`);
    }

}
