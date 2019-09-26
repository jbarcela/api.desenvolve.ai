import * as dotenv from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MailerOptions, HandlebarsAdapter } from '@nest-modules/mailer';

export class ConfigService {
    constructor() {
        const nodeEnv = this.nodeEnv;

        dotenv.config({
            path: `.${nodeEnv}.env`,
        });

        // trocar os \\n para \n
        for (const envName of Object.keys(process.env)) {
            process.env[envName] = process.env[envName].replace(/\\n/g, '\n');
        }
    }

    public get(key: string): string {
        return process.env[key];
    }

    public getNumber(key: string): number {
        return Number(this.get(key));
    }

    get nodeEnv(): string {
        return this.get('NODE_ENV') || 'development';
    }

    get typeOrmConfig(): TypeOrmModuleOptions {
        const entities = [__dirname + '/../../modules/**/*.entity{.ts,.js}'];
        const migrations = [__dirname + '/../../migrations/*{.ts,.js}'];

        return {
            entities,
            migrations,
            keepConnectionAlive: true,
            type: 'postgres',
            host: this.get('POSTGRES_HOST'),
            port: this.getNumber('POSTGRES_PORT'),
            username: this.get('POSTGRES_USERNAME'),
            password: this.get('POSTGRES_PASSWORD'),
            database: this.get('POSTGRES_DATABASE'),
            migrationsRun: true,
            logging: this.nodeEnv === 'development',
        };
    }

    get mailerConfig(): MailerOptions {
        const templatesDir = __dirname + '/../../modules/mail/templates';

        return {
            transport: {
                host: this.get('MAIL_SMTP'),
                port: this.getNumber('MAIL_PORT'),
                auth: {
                    user: this.get('MAIL_USER'),
                    pass: this.get('MAIL_PASSWORD')
                }
            },
            defaults: {
                from: 'desenvolve.ai <contato@desenvolveaistudio.com.br>'
            },
            template: {
                dir: templatesDir,
                adapter: new HandlebarsAdapter(),
                options: {
                    strict: true
                }
            }
        }
    }
}
