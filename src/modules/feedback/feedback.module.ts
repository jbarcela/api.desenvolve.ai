import { Module } from '@nestjs/common';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackRepository } from './feedback.repository';
import { UserRepository } from '../user/user.repository';

@Module({
    imports: [TypeOrmModule.forFeature([FeedbackRepository, UserRepository])],
    controllers: [FeedbackController],
    exports: [],
    providers: [FeedbackService],
})
export class FeedbackModule {}
