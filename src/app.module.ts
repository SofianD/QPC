import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://user:JWz8JSFIKJT0z1ug@cluster0-moz4l.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    )
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
