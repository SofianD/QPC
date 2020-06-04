import { Module } from '@nestjs/common';
import { AuthenticationController } from './controller/authentication.controller';
import { AuthenticationService } from './service/authentication.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from 'src/shared/models/user.model';

@Module({
    imports: [
        TypegooseModule.forFeature([User]),
    ],
    controllers: [
        AuthenticationController
    ],
    providers: [
        AuthenticationService,
    ],
    exports: [
        AuthenticationService
    ]
})
export class AuthenticationModule {}
