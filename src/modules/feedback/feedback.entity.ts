import { AbstractEntity } from '../../common/abstract.entity';
import { FeedbackDto } from './dto/feedback.dto';
import { JoinColumn, ManyToOne, Column, Entity } from 'typeorm';
import { User } from '../user/user.entity';

@Entity({ name: 'feedbacks' })
export class Feedback extends AbstractEntity<FeedbackDto> {
    @Column({ type: 'int', default: 0 })
    points: number;

    @Column()
    message: string;

    @Column({ name: 'user_donator_id' })
    userDonatorId: string;

    @Column({ name: 'user_receiver_id' })
    userReceiverId: string;

    @ManyToOne(() => User, user => user.feedbacksAsReceiver, { eager: true })
    @JoinColumn({ name: 'user_receiver_id' })
    userReceiver: User;

    @ManyToOne(() => User, user => user.feedbacksAsDonator, { eager: true })
    @JoinColumn({ name: 'user_donator_id' })
    userDonator: User;

    dtoClass = FeedbackDto;
}
