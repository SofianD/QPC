import { Module } from '@nestjs/common';
import { FourInRowController } from './controller/four-in-row.controller';
import { QuestionService } from '../question/service/question.service';


@Module({
    imports: [],
    controllers: [
        FourInRowController
    ],
    providers: [
        QuestionService
    ]
})

export class FourInRowModule {}
