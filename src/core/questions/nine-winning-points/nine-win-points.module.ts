import { Module } from '@nestjs/common';
import { NineWinPointsController } from './controller/nine-win-points.controller';
import { QuestionService } from '../question/service/question.service';

@Module({
    imports: [],
    controllers: [
        NineWinPointsController
    ],
    providers: [
        QuestionService
    ]
})

export class NineWinPointsModule {}
