import { Controller, Post, UseGuards, Body, Put, Param, HttpException, HttpStatus, Delete, Get } from '@nestjs/common';
import { ThemesService } from '../service/themes.service';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import { Themes } from 'src/shared/models/themes.interface';

@Controller('themes')
export class ThemesController {

    constructor(
        private readonly themesService: ThemesService
    ) {}

    @Get()
    async getThemes() {
        return await this.themesService.getAll();
    }

    @Get(':id')
    async getTheme(
        @Param('id') id: string
    ) {
        const theme = await this.themesService.getOne(id);
        if (theme === null) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        return theme;
    }

    @Post()
    @UseGuards(AuthGuard)
    async addThemes(
        @Body('theme') theme: Themes
    ) {
        
        await this.themesService.create(theme);
        return;
    }

    @Put(':id')
    @UseGuards(AuthGuard)
    async editTheme(
        @Param('id') id: string,
        @Body('theme') theme: Themes
    ) {
        const result = await this.themesService.update(id, theme);
        if(result === 0) throw new HttpException('No changes made', HttpStatus.BAD_REQUEST);

        return await this.themesService.getOne(id);
    }

    @Delete(':id')
    @UseGuards(AuthGuard)
    async deleteTheme(
        @Param('id') id: string
    ) {
        const result = await this.themesService.delete(id);
        if (result.n === 0) throw new HttpException('Project not found', HttpStatus.NOT_FOUND);
        if(result.deletedCount === 0) throw new HttpException('Deletion failed', HttpStatus.BAD_REQUEST);

        return {
            message: 'Deletion was successfuly'
        };
    }

}
