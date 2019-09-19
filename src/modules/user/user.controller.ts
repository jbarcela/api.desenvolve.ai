import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private _userService: UserService) {}

    @Post()
    async createUser(): Promise<any> {
        return this._userService.createUser();
    }
}
