import { Controller, Get, Param, HttpException, HttpStatus } from '@nestjs/common';

import { QuestionService } from '../../question/service/question.service';

@Controller('nine-win-points')
export class NineWinPointsController {
    constructor(
        private readonly questionService: QuestionService
    ) {}

    @Get()
    async getQuestions(): Promise<any> {
        
        const result = await this.questionService.getAll();
        if (result.length === 0) throw new HttpException('No question found', HttpStatus.NOT_FOUND);

        const questions = [];
        for(let i = 0; i < result.length; i++) {
            questions.push({
                question: result[i].question,
                response: result[i].response
            });
        }

        return questions;
    }

    @Get(':id')
    async getQuestion(
        @Param('id') id: string
    ): Promise<any> {
        const question = await this.questionService.getOne(id);
        if (question === null) throw new HttpException('Question not found', HttpStatus.NOT_FOUND);

        return question;
    }

}
