import { Module, MiddlewareConsumer } from '@nestjs/common';
import { AuthController } from './core/auth/controller/auth.controller';
import { UserModule } from './core/user/user.module';
import { AuthModule } from './core/auth/module/auth.module';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthMiddleware } from './core/auth/middleware/auth.middleware';
import { UserController } from './core/user/controller/user.controller';
import { AuthenticationModule } from './core/authentication/authentication.module';

@Module({
  imports: [
    TypegooseModule.forRoot(
      'mongodb+srv://user:JWz8JSFIKJT0z1ug@cluster0-moz4l.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    ),
    UserModule,
    AuthenticationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
