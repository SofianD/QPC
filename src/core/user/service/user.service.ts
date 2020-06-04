import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { User } from 'src/shared/models/user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
  ) {}

  async create(user: User) {
    const model = new this.userModel(user);

    try {
      await model.hashPassword();
      const createdUser = await model.save() as any;
      const {__v, password, ...newUser} = createdUser._doc;
      return newUser;
    } catch (error) {
      throw Error(error);
    }
  }

  async findFromEmail(email: string) {
    return await this.userModel.findOne({ email });
  }

  async findFromPseudonyme(pseudo: string) {
    return await this.userModel.findOne({ pseudo });
  }

  async find(id: string) {
    return await this.userModel.findById(id);
  }
}
