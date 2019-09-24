import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsersAndFeedbacksTables1569352971082 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TYPE "users_role_enum" AS ENUM('USER', 'ADMIN')`, undefined);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "points" integer DEFAULT 0, "receivedPoints" integer DEFAULT 0, "username" character varying NOT NULL, "role" "users_role_enum" NOT NULL DEFAULT 'USER', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "feedbacks" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "points" integer NOT NULL DEFAULT 0, "message" character varying NOT NULL, "user_donator_id" uuid NOT NULL, "user_receiver_id" uuid NOT NULL, CONSTRAINT "PK_79affc530fdd838a9f1e0cc30be" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD CONSTRAINT "FK_9e1b3bbd9db990a06cab460c989" FOREIGN KEY ("user_receiver_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "feedbacks" ADD CONSTRAINT "FK_305e250166423507b8493377f3b" FOREIGN KEY ("user_donator_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP CONSTRAINT "FK_305e250166423507b8493377f3b"`, undefined);
        await queryRunner.query(`ALTER TABLE "feedbacks" DROP CONSTRAINT "FK_9e1b3bbd9db990a06cab460c989"`, undefined);
        await queryRunner.query(`DROP TABLE "feedbacks"`, undefined);
        await queryRunner.query(`DROP TABLE "users"`, undefined);
        await queryRunner.query(`DROP TYPE "users_role_enum"`, undefined);
    }

}
