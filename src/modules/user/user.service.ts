import { Injectable } from '@nestjs/common/decorators';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';
import { UserInDto } from './dto/user-in.dto';
import { UserOutDto } from './dto/user-out.dto';

@Injectable()
export class UserService {
    constructor(public readonly userRepository: UserRepository) {
    }

    async createUser(userInDto: UserInDto): Promise<UserOutDto> {
        const newUser = UserService._createUserEntity(userInDto);
        newUser.name = 'Jonathan';
        const user = this.userRepository.create(newUser);
        return UserService._createUserOutDto(this.userRepository.save(user));
    }

    private static _createUserEntity(userInDto: UserInDto): UserEntity {
        return new UserEntity(
            userInDto.name,
            userInDto.email,
            userInDto.password,
            0,
            0);
    }

    // tslint:disable-next-line:no-unused
    private static _createUserOutDto(userEntity: Promise<UserEntity>): Promise<UserOutDto> {
        return null;
        // return new UserOutDto(userEntity.id,
        //     userEntity.name,
        //     userEntity.email,
        //     userEntity.password,
        //     userEntity.points,
        //     userEntity.receivedPoints);
    }
}
