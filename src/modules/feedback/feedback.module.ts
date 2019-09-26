import { Module } from '@nestjs/common';
import { FeedbackController } from './feedback.controller';
import { FeedbackService } from './feedback.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedbackRepository } from './feedback.repository';
import { UserRepository } from '../user/user.repository';
import {MailService} from "../mail/mail.service";
import {MailModule} from "../mail/mail.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([FeedbackRepository, UserRepository]),
    ],
    controllers: [FeedbackController],
    exports: [],
    providers: [FeedbackService, ],
})
export class FeedbackModule {}
