import {IsEmail, IsString} from "class-validator";
import {ApiModelProperty} from "@nestjs/swagger";

export class ForgotInDto {
    @IsString()
    @IsEmail()
    @ApiModelProperty()
    readonly email: string;

    @IsString()
    @ApiModelProperty()
    readonly redirectUrl: string;
}
