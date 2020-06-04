import { Controller, Get, Post, UseGuards, Body, Put, Delete, Param, HttpException, HttpStatus } from '@nestjs/common';
import { NineWinPointsService } from '../service/nine-win-points.service';
import { AuthGuard } from 'src/shared/guards/auth.guard';
// import { NineWinPoints } from 'src/shared/models/nine-win-points.model';
import { QuestionService } from '../../question/service/question.service';

@Controller('nine-win-points')
export class NineWinPointsController {
    constructor(
        // private readonly nwpService: NineWinPointsService,
        private readonly questionService: QuestionService
    ) {}

    @Get()
    async getQuestions(): Promise<any> {
        // return {
        //     message: 'Fetched successfully',
        //     questions: await this.nwpService.getAll()
        // };

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
        // const result = await this.nwpService.getOne(id);
        // if (result === null) throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
        // return {
        //     message: 'Question found',
        //     question: result
        // }
    }

    // @Post()
    // @UseGuards(AuthGuard)
    // async addQuestion(
    //     @Body('questions') questions: NineWinPoints[]
    // ) {
    //     for(let i = 0; i < questions.length; i++) {
    //         await this.nwpService.create(questions[i]);
    //     }
    //     return;
    // }

    // @Put(':id')
    // @UseGuards(AuthGuard)
    // async updateQuestion(
    //     @Param('id') id: string,
    //     @Body('question') question: NineWinPoints
    // ) {
    //     const result = await this.nwpService.update(id, question);
    //     if (result === 0) throw new HttpException('No changes made', HttpStatus.BAD_REQUEST);
    //     return await this.nwpService.getOne(id);
    // }

    // @Delete(':id')
    // @UseGuards(AuthGuard)
    // async deleteQuestion(
    //     @Param('id') id: string
    // ) {
    //     const result = await this.nwpService.delete(id);
    //     if (result.n === 0) throw new HttpException('PROJECT NOT FOUND', HttpStatus.NOT_FOUND);
    //     if (result.deletedCount === 0) throw new HttpException('Deletion failed', HttpStatus.BAD_REQUEST);

    //     return {
    //         message: 'Deletion was successfully'
    //     };
    // }
}
