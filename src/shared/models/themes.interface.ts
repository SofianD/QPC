import { prop } from "@typegoose/typegoose";

export class Themes {

    _id: string;

    @prop()
    name: string;
}
