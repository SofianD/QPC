import { prop } from "@typegoose/typegoose";

export class FaceToFace {

    _id: string;

    @prop()
    question: string;

    @prop()
    response: string;

    @prop()
    clue: string;
}
