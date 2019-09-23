import { ApiModelProperty } from '@nestjs/swagger';

export class TokenDto {
    @ApiModelProperty()
    expiresIn: number;

    @ApiModelProperty()
    accessToken: string;

    constructor(expiresIn: number, accessToken: string) {
        this.expiresIn = expiresIn;
        this.accessToken = accessToken;
    }
}
