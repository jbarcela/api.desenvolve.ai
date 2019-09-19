import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './shared/services/config.service';
import { SharedModule } from './shared/shared.module';

import * as morgan from 'morgan';

import {
    initializeTransactionalContext,
    patchTypeORMRepositoryWithBaseRepository,
} from 'typeorm-transactional-cls-hooked';

async function bootstrap() {
    initializeTransactionalContext();
    patchTypeORMRepositoryWithBaseRepository();

    const app = await NestFactory.create(AppModule);

    app.use(morgan('combined'));

    const configService = app.select(SharedModule).get(ConfigService);

    const port = configService.getNumber('PORT');
    await app.listen(port);

    console.info(`server running on port ${port}`);
}

bootstrap();
