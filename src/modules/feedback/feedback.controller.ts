import { Body, Controller, Get, Post } from '@nestjs/common';
import { FeedbackInDto } from './dto/feedback-in.dto';
import { FeedbackDto } from './dto/feedback.dto';
import { FeedbackService } from './feedback.service';
import { ApiUseTags } from '@nestjs/swagger';
import { Feedback } from './feedback.entity';

@Controller('feedbacks')
@ApiUseTags('feedbacks')
export class FeedbackController {
    constructor(public readonly feedbackService: FeedbackService) {}

    @Post()
    async create(@Body() feedbackInDto: FeedbackInDto): Promise<FeedbackDto> {
        const createdFeedback = await this.feedbackService.create(
            feedbackInDto,
        );
        return createdFeedback.toDto();
    }

    @Get()
    async getAll(): Promise<FeedbackDto[]> {
        const feedbacks = await this.feedbackService.getAllFeedbacks();
        return feedbacks.map((feedback: Feedback) => {
            return feedback.toDto();
        });
    }
}
