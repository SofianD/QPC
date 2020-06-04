import { prop, Ref } from "@typegoose/typegoose";
import { Themes } from "./themes.interface";

export class Question {

    _id: string;

    @prop()
    question: string;

    @prop()
    response: string;

    @prop()
    clue: string;

    @prop({ref: Themes})
    themes: Ref<Themes>
}
