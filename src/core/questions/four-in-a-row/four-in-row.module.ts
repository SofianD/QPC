import { Module } from '@nestjs/common';
import { FourInRowController } from './controller/four-in-row.controller';
import { FourInRowService } from './service/four-in-row.service';

@Module({
    imports: [],
    controllers: [
        FourInRowController
    ],
    providers: [
        FourInRowService
    ]
})

export class FourInRowModule {}
