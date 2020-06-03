import { Module, MiddlewareConsumer, forwardRef } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from 'src/shared/models/user.model';
import { UserController } from './controller/user.controller';
import { UserService } from './service/user.service';
import { AuthMiddleware } from '../auth/middleware/auth.middleware';
import { JwtModule } from '@nestjs/jwt';
import { AuthModule } from '../auth/module/auth.module';

@Module({
  imports: [
    TypegooseModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {
}