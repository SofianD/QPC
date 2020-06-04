import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { Themes } from 'src/shared/models/themes.interface';
import { ThemesController } from './controller/themes.controller';
import { ThemesService } from './service/themes.service';

@Module({
    imports: [
        TypegooseModule.forFeature([Themes])
    ],
    controllers: [
        ThemesController
    ],
    providers: [
        ThemesService
    ],
    exports: [
        ThemesService
    ]
})
export class ThemesModule {}
