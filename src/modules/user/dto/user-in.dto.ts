import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class UserInDto {
    @IsNotEmpty()
    @ApiModelProperty()
    name: string;

    @IsEmail()
    @ApiModelProperty()
    email: string;

    @IsNotEmpty()
    @ApiModelProperty()
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    @ApiModelProperty()
    username: string;
}
