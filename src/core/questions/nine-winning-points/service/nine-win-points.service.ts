import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { NineWinPoints } from 'src/shared/models/nine-win-points.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class NineWinPointsService {
    // constructor(
    //     @InjectModel(NineWinPoints) private readonly nwpModel: ReturnModelType<typeof NineWinPoints>
    // ) {}

    // async create(
    //     question: NineWinPoints
    // ) {
    //     const model = new this.nwpModel(question);

    //     try {
    //         const res = await model.save() as any;
    //         const {__v, ...createdQuestion} = res._doc;
    //         return createdQuestion;
    //     } catch (error) {
    //         throw Error(error);
    //     }
    // }

    // async update(
    //     id: string,
    //     question: NineWinPoints
    // ) {
    //     try {
    //         const result = await this.nwpModel.updateOne(
    //             {_id: id},
    //             question
    //         );
    //         return result.nModified;
    //     } catch (error) {
    //         throw Error(error);
    //     }
    // }

    // async delete(
    //     id: string
    // ) {
    //     try {
    //         const result = await this.nwpModel.deleteOne({_id: id});
    //         return result;
    //     } catch (error) {
    //         throw Error(error);
    //     }
    // }

    // async getOne(
    //     id: string
    // ) {
    //     try {
    //         const result = await this.nwpModel.findById(id) as any;
    //         const {__v, ...question} = result._doc;
    //         return question;
    //     } catch (error) {
    //         throw Error(error);
    //     }
    // }

    // async getAll() {
    //     try {
    //         return this.nwpModel.find().exec();
    //     } catch (error) {
    //         throw Error(error);
    //     }
    // }
}
