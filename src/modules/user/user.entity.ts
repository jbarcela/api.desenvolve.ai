import { Entity, Column, OneToMany } from 'typeorm';
import { AbstractEntity } from '../../common/abstract.entity';
import { UserOutDto } from './dto/user-out.dto';
import { PasswordTransformer } from './password.transformer';
import { RoleType } from '../../constants/role-type';
import { Feedback } from '../feedback/feedback.entity';

@Entity({ name: 'users' })
export class User extends AbstractEntity<UserOutDto> {
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

    @Column({ type: 'enum', enum: RoleType, default: RoleType.User })
    role: RoleType;

    @OneToMany(type => Feedback, feedback => feedback.userDonator)
    feedbacksAsDonator: Feedback[];

    @OneToMany(type => Feedback, feedback => feedback.userReceiver)
    feedbacksAsReceiver: Feedback[];

    dtoClass = UserOutDto;
}
