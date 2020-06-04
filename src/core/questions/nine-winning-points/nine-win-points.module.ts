import { Module } from '@nestjs/common';
import { NineWinPointsController } from './controller/nine-win-points.controller';
import { NineWinPointsService } from './service/nine-win-points.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { NineWinPoints } from 'src/shared/models/nine-win-points.model';
import { QuestionService } from '../question/service/question.service';

@Module({
    imports: [
        TypegooseModule.forFeature([NineWinPoints])
    ],
    controllers: [
        NineWinPointsController
    ],
    providers: [
        QuestionService //à modifier si Pierre pas content
    ]
})

export class NineWinPointsModule {}
