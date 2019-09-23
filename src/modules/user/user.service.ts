import { Injectable } from '@nestjs/common/decorators';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import { UserInDto } from './dto/user-in.dto';
import { FindConditions } from 'typeorm';

@Injectable()
export class UserService {
    constructor(public readonly userRepository: UserRepository) {}

    findUser(findData: FindConditions<UserEntity>): Promise<UserEntity> {
        return this.userRepository.findOne(findData);
    }

    findUsers(findData: FindConditions<UserEntity>): Promise<UserEntity[]> {
        return this.userRepository.find(findData);
    }

    async createUser(userInDto: UserInDto): Promise<UserEntity> {
        const user = this.userRepository.create(userInDto);
        return this.userRepository.save(user);
    }
}
