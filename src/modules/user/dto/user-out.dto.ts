import { AbstractDto } from '../../../common/dto/abstract.dto';
import { User } from '../user.entity';

import { ApiModelProperty } from '@nestjs/swagger';

export class UserOutDto extends AbstractDto {
    @ApiModelProperty()
    name: string;

    @ApiModelProperty()
    email: string;

    @ApiModelProperty()
    points: number;

    @ApiModelProperty()
    receivedPoints: number;

    @ApiModelProperty()
    username: string;

    constructor(user: User) {
        super(user);
        this.name = user.name;
        this.email = user.email;
        this.points = user.points;
        this.receivedPoints = user.receivedPoints;
        this.username = user.username;
    }
}
