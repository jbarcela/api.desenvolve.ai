import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { UserInDto } from './dto/user-in.dto';
import { UserOutDto } from './dto/user-out.dto';

import { ApiBearerAuth, ApiUseTags } from '@nestjs/swagger';
import { AuthGuard } from '../../guards/auth.guard';

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
