import { Body, Controller, Post } from '@nestjs/common';
import { FeedbackInDto } from './dto/feedback-in.dto';
import { FeedbackDto } from './dto/feedback.dto';
import { FeedbackService } from './feedback.service';
import { ApiUseTags } from '@nestjs/swagger';

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
}
