import { MigrationInterface, QueryRunner } from "typeorm";

export class initial1677204054785 implements MigrationInterface {
  name = "initial1677204054785";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "annoucements" DROP CONSTRAINT "FK_332a4ca850e1d31ce041d8ea722"`
    );
    await queryRunner.query(
      `ALTER TABLE "annoucements" ADD CONSTRAINT "FK_332a4ca850e1d31ce041d8ea722" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "annoucements" DROP CONSTRAINT "FK_332a4ca850e1d31ce041d8ea722"`
    );
    await queryRunner.query(
      `ALTER TABLE "annoucements" ADD CONSTRAINT "FK_332a4ca850e1d31ce041d8ea722" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
    );
  }
}
