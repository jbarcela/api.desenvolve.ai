import { Injectable } from '@nestjs/common';
import { FeedbackRepository } from './feedback.repository';
import { FeedbackInDto } from './dto/feedback-in.dto';
import { Feedback } from './feedback.entity';

@Injectable()
export class FeedbackService {
    constructor(public readonly feedbackRepository: FeedbackRepository) {}

    async create(feedbackInDto: FeedbackInDto): Promise<Feedback> {
        const feedback = this.feedbackRepository.create(feedbackInDto);
        return this.feedbackRepository.save(feedback);
    }
}
