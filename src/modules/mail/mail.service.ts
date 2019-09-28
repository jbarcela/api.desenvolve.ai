import {Injectable} from "@nestjs/common";
import {MailerService} from "@nest-modules/mailer";

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}

    async sendPasswordResetEmail(email: string, resetToken: string, redirectUrl: string): Promise<void> {
        await this.mailerService.sendMail({
            to: email,
            subject: 'Recuperação de senha - Desenvolve.ai',
            template: 'password-reset',
            context: {
                email: email,
                token: resetToken,
                link: redirectUrl
            }
        })
    }
}
