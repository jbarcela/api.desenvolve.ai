import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTable1568922337482 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "points" integer NOT NULL, "receivedPoints" integer NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "users"`, undefined);
    }

}
