import { AbstractDto } from '../../../common/dto/abstract.dto';
import { Feedback } from '../feedback.entity';

export class FeedbackDto extends AbstractDto {
    userReceiver: string;
    userDonator: string;
    points: number;
    message: string;

    constructor(feedback: Feedback) {
        super(feedback);
        this.userReceiver = feedback.userReceiverId;
        this.userDonator = feedback.userDonatorId;
        this.points = feedback.points;
        this.message = feedback.message;
    }
}
