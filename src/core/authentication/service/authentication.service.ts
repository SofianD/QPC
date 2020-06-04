import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { User } from 'src/shared/models/user.model';
import { ReturnModelType } from '@typegoose/typegoose';

@Injectable()
export class AuthenticationService {
    
    constructor(
        @InjectModel(User) private readonly userModel: ReturnModelType<typeof User>,
    ) {}
    
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
