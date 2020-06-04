import { Injectable } from '@nestjs/common';
import { Question } from 'src/shared/models/question.interface';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';

@Injectable()
export class QuestionService {
    constructor(
        @InjectModel(Question) private readonly questionModel: ReturnModelType<typeof Question>
    ) {}

    async create(
        question: Question
    ) {
        const model = new this.questionModel(question);

        try {
            const res = await model.save() as any;
            const {__v, ...createdQuestion} = res._doc;
            return createdQuestion;
        } catch (error) {
            throw Error(error);
        }
    }

    async update(
        id: string,
        question: Question
    ) {
        try {
            const result = await this.questionModel.updateOne(
                {_id: id},
                question
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
            const result = await this.questionModel.deleteOne({_id: id});
            return result;
        } catch (error) {
            throw Error(error);
        }
    }

    async getOne(
        id: string
    ) {
        try {
            const result = await this.questionModel.findById(id) as any;
            const {__v, ...question} = result._doc;
            return question;
        } catch (error) {
            throw Error(error);
        }
    }

    async getAll() {
        try {
            return this.questionModel.find().exec();
        } catch (error) {
            throw Error(error);
        }
    }
}
