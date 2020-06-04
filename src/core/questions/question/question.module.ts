import { Module } from '@nestjs/common';
import { QuestionController } from './controller/question.controller';
import { QuestionService } from './service/question.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { Question } from 'src/shared/models/question.interface';

@Module({
    imports:[
        TypegooseModule.forFeature([Question])
    ],
    controllers: [QuestionController],
    providers: [QuestionService],
    exports: [QuestionService]
})
export class QuestionModule {}
