import { ConfigService } from './services/config.service';
import { Global, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

@Global()
@Module({
    providers: [ConfigService],
    imports: [
        JwtModule.registerAsync({
            imports: [SharedModule],
            useFactory: (configService: ConfigService) => {
                return {
                    secretOrPrivateKey: configService.get('JWT_SECRET_KEY'),
                    signOptions: {
                        expiresIn: configService.getNumber(
                            'JWT_EXPIRATION_TIME',
                        ),
                    },
                };
            },
            inject: [ConfigService],
        }),
    ],
    exports: [ConfigService, JwtModule],
})
export class SharedModule {}
