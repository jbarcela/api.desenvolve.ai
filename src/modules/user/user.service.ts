import { Injectable } from '@nestjs/common/decorators';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { UserInDto } from './dto/user-in.dto';
import { FindConditions } from 'typeorm';

@Injectable()
export class UserService {
    constructor(public readonly userRepository: UserRepository) {}

    findUser(findData: FindConditions<User>): Promise<User> {
        return this.userRepository.findOne(findData);
    }

    findUsers(findData: FindConditions<User>): Promise<User[]> {
        return this.userRepository.find(findData);
    }

    async createUser(userInDto: UserInDto): Promise<User> {
        const user = this.userRepository.create(userInDto);
        return this.userRepository.save(user);
    }
}
