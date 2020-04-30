import { Module } from '@nestjs/common';
import { NineWinPointsController } from './controller/nine-win-points.controller';
import { NineWinPointsService } from './service/nine-win-points.service';

@Module({
    imports: [],
    controllers: [
        NineWinPointsController
    ],
    providers: [
        NineWinPointsService
    ]
})

export class NineWinPointsModule {}
