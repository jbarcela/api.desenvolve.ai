import { Injectable } from '@nestjs/common/decorators';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import { UserInDto } from './dto/user-in.dto';

@Injectable()
export class UserService {
    constructor(public readonly userRepository: UserRepository) {}

    async createUser(userInDto: UserInDto): Promise<UserEntity> {
        const user = this.userRepository.create(userInDto);
        return this.userRepository.save(user);
    }
}
