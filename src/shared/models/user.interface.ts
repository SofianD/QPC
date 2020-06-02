import { prop } from '@typegoose/typegoose';
import * as bcrypt from 'bcrypt';

export class User {
  _id: string;

  @prop()
  email: string;

  @prop()
  password: string;

  @prop()
  pseudo: string;

  @prop({ default: new Date() })
  createdAt: Date;

  @prop({ default: 0 })
  rank: number;

  async hashPassword(): Promise<void> {
    this.password = await bcrypt.hash(this.password, 10);
  }
}