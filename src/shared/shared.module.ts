import { ConfigService } from './services/config.service';
import { Global, Module } from '@nestjs/common';

@Global()
@Module({
    providers: [ConfigService],
    imports: [],
    exports: [ConfigService],
})
export class SharedModule {}
