import { Controller, Get, HttpException, HttpStatus, Param, Post, UseGuards, Body, Put, Delete } from '@nestjs/common';
import { QuestionService } from '../service/question.service';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { Question } from 'src/shared/models/question.interface';

@Controller('question')
export class QuestionController {

    constructor(
        private readonly questionService: QuestionService
    ) {}

    @Get()
    async getQuestions() {
        const questions = await this.questionService.getAll();
        if (questions.length) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    
        return questions;
    }

    @Get(':id')
    async getQuestion(
        @Param('id') id: string
    ) {
        const question = await this.questionService.getOne(id);
        if (question === null) throw new HttpException('Not foud', HttpStatus.NOT_FOUND);

        return question;
    }

    @Post()
    @UseGuards(AuthGuard)
    async addQuestion(
        @Body('question') question: Question
    ) {
        return await this.questionService.create(question);
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    async updateQuestion(
        @Param('id') id: string,
        @Body('question') question: Question
    ) {
        const result = await this.questionService.update(id, question);
        if (result === 0) throw new HttpException('No changes made', HttpStatus.BAD_REQUEST);

        return await this.questionService.getOne(id);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteQuestion(
        @Param('id') id: string
    ) {
        const result = await this.questionService.delete(id);
        if (result.n === 0) throw new HttpException('PROJECT NOT FOUND', HttpStatus.NOT_FOUND);
        if (result.deletedCount === 0) return {message:'Deletion failed'};

        return {
            message:'Deletion was successfull'
        };
    }
}
