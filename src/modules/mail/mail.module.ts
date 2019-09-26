import {Module} from "@nestjs/common";
import {MailService} from "./mail.service";
import {MailerModule} from "@nest-modules/mailer";
import {SharedModule} from "../../shared/shared.module";
import {ConfigService} from "../../shared/services/config.service";

@Module({
    imports: [
        MailerModule.forRootAsync({
            imports: [SharedModule],
            useFactory: (configService: ConfigService) =>
                configService.mailerConfig,
            inject: [ConfigService],
        }),
    ],
    exports: [MailService],
    providers: [MailService],
})
export class MailModule {}
