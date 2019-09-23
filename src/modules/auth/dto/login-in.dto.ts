import { IsString, IsEmail } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class LoginInDto {
    @IsString()
    @IsEmail()
    @ApiModelProperty()
    readonly email: string;

    @IsString()
    @ApiModelProperty()
    readonly password: string;
}
