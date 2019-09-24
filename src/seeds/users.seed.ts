import { User } from '../modules/user/user.entity';
import * as Chance from 'chance';

export class UsersSeed {
    generateUsers(numberToGenerate: number): User[] {
        const users: User[] = new Array<User>();

        for (let i = 0; i < numberToGenerate; i++) {
            const chance = new Chance(i);

            const user = new User(
                chance.name(),
                chance.email(),
                '123456',
                200,
                0,
                chance.twitter(),
            );

            users.push(user);
        }

        return users;
    }
}
