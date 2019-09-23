import { Entity, Column } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';
import { UserOutDto } from './dto/user-out.dto';
import { PasswordTransformer } from './password.transformer';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserOutDto> {
    @Column()
    name: string;

    @Column()
    email: string;

    @Column({ transformer: new PasswordTransformer() })
    password: string;

    @Column({ type: 'int', default: 0, nullable: true })
    points: number;

    @Column({ type: 'int', default: 0, nullable: true })
    receivedPoints: number;

    @Column()
    username: string;

    dtoClass = UserOutDto;
}
