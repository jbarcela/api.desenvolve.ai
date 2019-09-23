import { AbstractDto } from '../../../common/dto/abstract.dto';
import { UserEntity } from '../user.entity';

import { ApiModelProperty } from '@nestjs/swagger';

export class UserOutDto extends AbstractDto {
    @ApiModelProperty()
    public name: string;

    @ApiModelProperty()
    public email: string;

    @ApiModelProperty()
    public points: number;

    @ApiModelProperty()
    public receivedPoints: number;

    constructor(user: UserEntity) {
        super(user);
        this.name = user.name;
        this.email = user.email;
        this.points = user.points;
        this.receivedPoints = user.receivedPoints;
    }
}
