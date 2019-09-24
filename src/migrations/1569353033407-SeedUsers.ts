import { getRepository, MigrationInterface, QueryRunner } from 'typeorm';
import { UsersSeed } from '../seeds/users.seed';

export class SeedUsers1569353033407 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<any> {
        const seed = new UsersSeed();
        const users = seed.generateUsers(50);

        await getRepository('users').save(users);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {}
}
