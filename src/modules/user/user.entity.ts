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

    @Column({ name: 'reset_token', nullable: true})
    resetToken: string;

    @Column({ name: 'reset_token_date', type: "timestamp with time zone", nullable: true})
    resetTokenDate: Date;

    @OneToMany(type => Feedback, feedback => feedback.userDonator)
    feedbacksAsDonator: Feedback[];

    @OneToMany(type => Feedback, feedback => feedback.userReceiver)
    feedbacksAsReceiver: Feedback[];

    dtoClass = UserOutDto;

    constructor(
        name: string,
        email: string,
        password: string,
        points: number,
        receivedPoints: number,
        username: string,
    ) {
        super();
        this.name = name;
        this.email = email;
        this.password = password;
        this.points = points;
        this.receivedPoints = receivedPoints;
        this.username = username;
    }
}
