import { Module } from '@nestjs/common';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackRepository } from './feedback.repository';

@Module({
    imports: [TypeOrmModule.forFeature([FeedbackRepository])],
    controllers: [FeedbackController],
    exports: [],
    providers: [FeedbackService],
})
export class FeedbackModule {}
