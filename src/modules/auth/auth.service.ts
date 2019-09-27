import {
    BadRequestException,
    Injectable,
    NotFoundException,
} from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '../../shared/services/config.service';
import { UserService } from '../user/user.service';
import { TokenDto } from './dto/token.dto';
import { LoginInDto } from './dto/login-in.dto';
import { User } from '../user/user.entity';

import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        public readonly jwtService: JwtService,
        public readonly configService: ConfigService,
        public readonly userService: UserService,
    ) {}

    async createToken(id: string): Promise<TokenDto> {
        return new TokenDto(
            this.configService.getNumber('JWT_EXPIRATION_TIME'),
            await this.jwtService.signAsync({ id }),
        );
    }

    async validateUser(loginDto: LoginInDto): Promise<User> {
        const { password, email } = loginDto;

        const user = await this.userService.findUser({ email });
        if (!user) {
            throw new NotFoundException('User was not found');
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            throw new BadRequestException('Invalid credentials');
        }

        return user;
    }

    async forgotPassword(email: string): Promise<any> {
        const user = await this.userService.findUser({ email: email });
        console.table(user);
        if(!user)
            throw new NotFoundException('User was not found');

        const resetToken = crypto.randomBytes(15).toString('hex');

        user.resetToken = resetToken;
        user.resetTokenDate = new Date();

        await this.userService.saveUser(user);
    }
}
