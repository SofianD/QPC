import { Module } from '@nestjs/common';
import { FaceToFaceController } from './controller/face-to-face.controller';
import { FaceToFaceService } from './service/face-to-face.service';

@Module({
    imports: [],
    controllers: [
        FaceToFaceController
    ],
    providers: [
        FaceToFaceService
    ]
})
export class FaceToFaceModule {}
