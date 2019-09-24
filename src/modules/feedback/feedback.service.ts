import { Injectable } from '@nestjs/common';
import { FeedbackRepository } from './feedback.repository';
import { FeedbackInDto } from './dto/feedback-in.dto';
import { Feedback } from './feedback.entity';
import { UserRepository } from '../user/user.repository';
import { InsufficientPointsException } from '../../exceptions/InsufficientPointsException';

@Injectable()
export class FeedbackService {
    constructor(public readonly feedbackRepository: FeedbackRepository,
                public readonly userRepository: UserRepository) {}

    async create(feedbackInDto: FeedbackInDto): Promise<Feedback> {
        const feedback = this.feedbackRepository.create(feedbackInDto);
        if (await this._validatePointsToDonate(feedbackInDto)) {
            throw new InsufficientPointsException();
        }
        return this.feedbackRepository.save(feedback);
    }

    async getAllFeedbacks(): Promise<Feedback[]> {
        return this.feedbackRepository.find();
    }

    async listDonatorFeedbacks(userDonatorId: string): Promise<Feedback[]> {
        return this.feedbackRepository.findByDonator(userDonatorId);
    }

    async listReceiverFeedbacks(userReceiverId: string): Promise<Feedback[]> {
        return this.feedbackRepository.findByReceiver(userReceiverId);
    }

    private async _validatePointsToDonate(feedbackInDto: FeedbackInDto): Promise<boolean> {
        const user = await this.userRepository.findOne({id: feedbackInDto.userDonatorId});
        return user.points < feedbackInDto.points;
    }
}
