import { AbstractDto } from '../../../common/dto/abstract.dto';
import { Feedback } from '../feedback.entity';
import { UserOutDto } from '../../user/dto/user-out.dto';

export class FeedbackDto extends AbstractDto {
    userReceiver: string;
    userDonator: string;
    points: number;
    message: string;

    donator: UserOutDto;
    receiver: UserOutDto;

    constructor(feedback: Feedback) {
        super(feedback);
        this.userReceiver = feedback.userReceiverId;
        this.userDonator = feedback.userDonatorId;
        this.points = feedback.points;
        this.message = feedback.message;

        this.donator = feedback.userDonator.toDto();
        this.receiver = feedback.userReceiver.toDto();
    }
}
