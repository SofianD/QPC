import { Controller, Get, HttpException, HttpStatus, Param } from '@nestjs/common';
import { QuestionService } from '../../question/service/question.service';

@Controller('four-in-row')
export class FourInRowController {

    constructor(
        private readonly questionService: QuestionService
    ) {}

    @Get()
    async getQuestions() {
        const questions = await this.questionService.getAll();
        if (questions.length === 0) throw new HttpException('No question found', HttpStatus.NOT_FOUND);

        return questions;
    }

    @Get(':id')
    async getQuestion(
        @Param('id') id: string
    ) {
        const question = await this.questionService.getOne(id);
        if (question === null) throw new HttpException('Not found' , HttpStatus.NOT_FOUND);
        return question;
    }
}
