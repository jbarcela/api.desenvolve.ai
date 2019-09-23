import { Entity, Column } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';
import { UserOutDto } from './dto/user-out.dto';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserOutDto> {
    public name: string;

    @Column()
    public email: string;

    @Column()
    public password: string;

    @Column('int')
    public points: number;

    @Column('int')
    public receivedPoints: number;

    dtoClass = UserOutDto;
}
