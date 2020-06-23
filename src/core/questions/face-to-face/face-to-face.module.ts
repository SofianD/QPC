import { Module } from '@nestjs/common';
import { FaceToFaceController } from './controller/face-to-face.controller';
import { QuestionService } from '../question/service/question.service';


@Module({
    imports: [],
    controllers: [
        FaceToFaceController
    ],
    providers: [
        QuestionService
    ]
})
export class FaceToFaceModule {}
