import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { Themes } from 'src/shared/models/themes.interface';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class ThemesService {

    constructor(
        @InjectModel(Themes) private readonly themesModel: ReturnModelType<typeof Themes>
    ) {}

    async create(theme: Themes) {
        const model = new this.themesModel(theme);

        try {
            const result = await model.save() as any;
            const {__v, ...createdTheme} = result._doc;
            return createdTheme;
        } catch (error) {
            throw Error(error);
        }
    }

    async update(
        id: string,
        theme: Themes
    ) {
        try {
            const result = await this.themesModel.updateOne(
                {_id: id},
                theme
            );
            return result.nModified;
        } catch (error) {
            throw Error(error);
        }
    }

    async delete(
        id: string
    ) {
        try {
            const result = await this.themesModel.deleteOne({_id: id});
            return result;
        } catch (error) {
            throw Error(error);
        }
    }

    async getOne(
        id: string
    ) {
        try {
            const result = await this.themesModel.findById(id) as any;
            const {__v, ...question} = result._doc;
            return question;
        } catch (error) {
            throw Error(error);
        }
    }

    async getAll() {
        try {
            return this.themesModel.find().exec();
        } catch (error) {
            throw Error(error);
        }
    }
}
