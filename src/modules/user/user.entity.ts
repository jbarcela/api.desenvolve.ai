import { Entity, Column } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';
import { UserOutDto } from './dto/user-out.dto';
import { PasswordTransformer } from './password.transformer';

@Entity({ name: 'users' })
export class UserEntity extends AbstractEntity<UserOutDto> {
    public name: string;

    @Column()
    public email: string;

    @Column({ transformer: new PasswordTransformer() })
    public password: string;

    @Column({ type: 'int', default: 0, nullable: true })
    public points: number;

    @Column({ type: 'int', default: 0, nullable: true })
    public receivedPoints: number;

    dtoClass = UserOutDto;
}
