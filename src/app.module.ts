import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MailerModule } from '@nest-modules/mailer';

import { UserModule } from './modules/user/user.module';
import { SharedModule } from './shared/shared.module';
import { ConfigService } from './shared/services/config.service';
import { AuthModule } from './modules/auth/auth.module';
import { FeedbackModule } from './modules/feedback/feedback.module';
import { RankingModule } from './modules/ranking/ranking.module';
import {MailModule} from "./modules/mail/mail.module";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [SharedModule],
            useFactory: (configService: ConfigService) =>
                configService.typeOrmConfig,
            inject: [ConfigService],
        }),

        AuthModule,
        UserModule,
        FeedbackModule,
        RankingModule,
        MailModule,
    ],
    controllers: [],
    providers: [],
})
export class AppModule {}
