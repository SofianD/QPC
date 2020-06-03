import { Module } from '@nestjs/common';
import { UserModule } from './core/user/user.module';
import { TypegooseModule } from 'nestjs-typegoose';
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
