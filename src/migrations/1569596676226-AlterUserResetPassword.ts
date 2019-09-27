import {MigrationInterface, QueryRunner} from "typeorm";

export class AlterUserResetPassword1569596676226 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" ADD "reset_token" character varying`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "reset_token_date" TIMESTAMP WITH TIME ZONE`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reset_token_date"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "reset_token"`, undefined);
    }

}
