import { BadRequestException } from '@nestjs/common';

export class InsufficientPointsException extends BadRequestException {

    constructor(error?: string) {
        super('error.insufficient_points', error);
    }
}
