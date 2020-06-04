import { prop } from "@typegoose/typegoose";

export class FourInRow {

    _id: string;

    @prop()
    question: string;

    @prop()
    response: string;

    @prop()
    clue: string;
}
