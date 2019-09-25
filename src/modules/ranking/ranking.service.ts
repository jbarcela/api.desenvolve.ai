import { UserService } from '../user/user.service';
import { User } from '../user/user.entity';

export class RankingService {
    constructor(public readonly userService: UserService) {}

    getTop10(): Promise<User[]> {
        return this.userService
            .createQueryBuilder()
            .orderBy('user.receivedPoints', 'DESC')
            .take(10)
            .getMany();
    }
}
