import { UserOutDto } from '../../user/dto/user-out.dto';
import { TokenDto } from './token.dto';
import { ApiModelProperty } from '@nestjs/swagger';

export class LoginOutDto {
    @ApiModelProperty({ type: UserOutDto })
    user: UserOutDto;

    @ApiModelProperty({ type: TokenDto })
    token: TokenDto;

    constructor(user: UserOutDto, token: TokenDto) {
        this.user = user;
        this.token = token;
    }
}
