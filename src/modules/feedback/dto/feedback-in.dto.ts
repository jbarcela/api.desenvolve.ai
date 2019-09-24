import { IsNotEmpty } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class FeedbackInDto {
    @IsNotEmpty()
    @ApiModelProperty()
    userReceiverId: string;

    @IsNotEmpty()
    @ApiModelProperty()
    userDonatorId: string;

    @IsNotEmpty()
    @ApiModelProperty()
    points: number;

    @IsNotEmpty()
    @ApiModelProperty()
    message: string;
}
