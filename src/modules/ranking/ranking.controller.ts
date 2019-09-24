import { Controller } from '@nestjs/common';
import { RankingService } from './ranking.service';

@Controller('rankings')
export class RankingController {
    constructor(public readonly rankingService: RankingService) {}
}
