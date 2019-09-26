import {Injectable} from "@nestjs/common";
import {MailerService} from "@nest-modules/mailer";

@Injectable()
export class MailService {
    constructor(private readonly mailerService: MailerService) {}

    async sendHelloMail(): Promise<void> {
        await this.mailerService.sendMail({
            to: 'teste@teste.com',
            subject: 'Hello :)',
            template: 'hello',
            context: {
                title: 'Hello',
                body: 'WORLD!'
            }
        })
    }
}
