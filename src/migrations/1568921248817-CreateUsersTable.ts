import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsersTable1568921248817 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "age" TO "lastName"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastName"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "lastName" character varying NOT NULL`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "lastName"`, undefined);
        await queryRunner.query(`ALTER TABLE "users" ADD "lastName" integer NOT NULL`, undefined);
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "lastName" TO "age"`, undefined);
    }

}
