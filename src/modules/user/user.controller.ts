import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserInDto } from './dto/user-in.dto';
import { UserOutDto } from './dto/user-out.dto';

import { ApiUseTags } from '@nestjs/swagger';

@Controller('users')
@ApiUseTags('users')
export class UserController {
    constructor(private _userService: UserService) {}

    @Post()
    async createUser(@Body() userInDto: UserInDto): Promise<UserOutDto> {
        const createdUser = await this._userService.createUser(userInDto);
        return createdUser.toDto();
    }
}
