import { AbstractDto } from '../../../common/dto/abstract.dto';
import { UserEntity } from '../user.entity';

export class UserOutDto extends AbstractDto {
    public name: string;
    public email: string;
    public points: number;
    public receivedPoints: number;

    constructor(user: UserEntity) {
        super(user);
        this.name = user.name;
        this.email = user.email;
        this.points = user.points;
        this.receivedPoints = user.receivedPoints;
    }
}
