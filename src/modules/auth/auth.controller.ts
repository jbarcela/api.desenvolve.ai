import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse, ApiUseTags } from '@nestjs/swagger';
import { UserService } from '../user/user.service';
import { AuthService } from './auth.service';
import { LoginInDto } from './dto/login-in.dto';
import { LoginOutDto } from './dto/login-out.dto';

@Controller('auth')
@ApiUseTags('auth')
export class AuthController {
    constructor(
        public readonly userService: UserService,
        public readonly authService: AuthService,
    ) {}

    @Post('login')
    @ApiOkResponse({
        type: LoginOutDto,
        description: 'User info with access token',
    })
    async login(@Body() loginInDto: LoginInDto): Promise<LoginOutDto> {
        const userEntity = await this.authService.validateUser(loginInDto);

        const [user, token] = await Promise.all([
            userEntity.toDto(),
            this.authService.createToken(userEntity.id),
        ]);

        return new LoginOutDto(user, token);
    }

}
