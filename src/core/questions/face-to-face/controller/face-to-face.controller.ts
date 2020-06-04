import { Controller, Get, Post, UseGuards, Body, Put, Delete } from '@nestjs/common';
import { FaceToFaceService } from '../service/face-to-face.service';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { FaceToFace } from 'src/shared/models/face-to-face.interface';

@Controller('face-to-face')
export class FaceToFaceController {
    constructor(
        private readonly faceService: FaceToFaceService
    ) {}

    @Get()
    async getQuestions(): Promise<any> {
        return;
    }

    @Get(':id')
    async getQuestion(): Promise<any> {
        return;
    }

    @Post()
    @UseGuards(AuthGuard)
    async addQuestion(
        @Body('questions') questions: FaceToFace[]
    ) {
        return;
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    async updateQuestion(
        @Body('question') question: FaceToFace
    ) {
        return;
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteQuestion() {
        return;
    }
}
