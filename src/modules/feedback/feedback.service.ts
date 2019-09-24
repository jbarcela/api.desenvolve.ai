import { Injectable } from '@nestjs/common';
import { FeedbackRepository } from './feedback.repository';
import { FeedbackInDto } from './dto/feedback-in.dto';
import { Feedback } from './feedback.entity';
import { UserRepository } from '../user/user.repository';
import { InsufficientPointsException } from '../../exceptions/InsufficientPointsException';
import { User } from '../user/user.entity';

@Injectable()
export class FeedbackService {
    constructor(
        public readonly feedbackRepository: FeedbackRepository,
        public readonly userRepository: UserRepository,
    ) {}

    async create(feedbackInDto: FeedbackInDto): Promise<Feedback> {
        const feedback = this.feedbackRepository.create(feedbackInDto);
        if (await this._validatePointsToDonate(feedbackInDto)) {
            throw new InsufficientPointsException();
        }
        this._updateDonatorUserPoints(feedbackInDto);
        this._updateReceiverUserPoints(feedbackInDto);
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

    private async _validatePointsToDonate(
        feedbackInDto: FeedbackInDto,
    ): Promise<boolean> {
        const user = await this.userRepository.findOne({
            id: feedbackInDto.userDonatorId,
        });
        return user.points < feedbackInDto.points;
    }

    private async _updateDonatorUserPoints(feedbackInDto: FeedbackInDto) {
        const user: User = await this.userRepository.findOne({id: feedbackInDto.userDonatorId});
        user.points = +user.points - +feedbackInDto.points;

        await this.userRepository.save(user);
    }

    private async _updateReceiverUserPoints(feedbackInDto: FeedbackInDto) {
        const user: User = await this.userRepository.findOne({id: feedbackInDto.userReceiverId});
        user.points = +user.points + +feedbackInDto.points;

        await this.userRepository.save(user);
    }
}
