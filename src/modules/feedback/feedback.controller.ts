import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

    @Get('/donator/:userDonadorId')
    async  JONATHAN_SUBSTITUI_1(@Param() params): Promise<FeedbackDto[]> {
        const listFeedback = await this.feedbackService.listDonatorFeedbacks(params.userDonadorId);
        return listFeedback.map(l => l.toDto());
    }

    @Get('/receiver/:userReceiverId')
    async  JONATHAN_SUBSTITUI_2(@Param() params): Promise<FeedbackDto[]> {
        const listFeedback = await this.feedbackService.listReceiverFeedbacks(params.userReceiverId);
        return listFeedback.map(l => l.toDto());
    }
}
