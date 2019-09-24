import { Injectable } from '@nestjs/common/decorators';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { UserInDto } from './dto/user-in.dto';
import { FindConditions, QueryRunner, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class UserService {
    constructor(public readonly userRepository: UserRepository) {}

    findUser(findData: FindConditions<User>): Promise<User> {
        return this.userRepository.findOne(findData);
    }

    findUsers(findData: FindConditions<User>): Promise<User[]> {
        return this.userRepository.find(findData);
    }

    createQueryBuilder(
        alias: string = 'user',
        queryRunner?: QueryRunner,
    ): SelectQueryBuilder<User> {
        return this.userRepository.createQueryBuilder(alias, queryRunner);
    }

    async createUser(userInDto: UserInDto): Promise<User> {
        const user = this.userRepository.create(userInDto);
        return this.userRepository.save(user);
    }
}
