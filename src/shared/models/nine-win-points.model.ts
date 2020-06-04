import { prop, Ref } from '@typegoose/typegoose';
import { Themes } from './themes.interface';

export class NineWinPoints {

    _id: string;

    @prop()
    question: string;

    @prop()
    response: string;
}
