import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
    constructor(public readonly userRepository: UserRepository) {}

    async createUser(): Promise<UserEntity> {
        const newUser = new UserEntity();
        newUser.name = 'Jonathan';
        const user = this.userRepository.create(newUser);
        return this.userRepository.save(user);
    }
}
