import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { UserInDto } from './dto/user-in.dto';
import { UserOutDto } from './dto/user-out.dto';

@Controller('users')
export class UserController {
    constructor(private _userService: UserService) {}

    @Post()
    async createUser(@Body() userInDto: UserInDto): Promise<UserOutDto> {
        return this._userService.createUser(userInDto);
    }
}
