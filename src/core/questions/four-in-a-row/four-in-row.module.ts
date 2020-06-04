import { Module } from '@nestjs/common';
import { FourInRowController } from './controller/four-in-row.controller';
import { FourInRowService } from './service/four-in-row.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { QuestionService } from '../question/service/question.service';
import { FourInRow } from 'src/shared/models/four-in-row.interface';


@Module({
    imports: [
        TypegooseModule.forFeature([FourInRow])
    ],
    controllers: [
        FourInRowController
    ],
    providers: [
        QuestionService
    ]
})

export class FourInRowModule {}
