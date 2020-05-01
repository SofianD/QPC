import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from '../controller/auth.controller';
import { UserModule } from 'src/core/user/user.module';
import { jwtSecret } from '../utils/jwt.secret';
import { JwtStrategy } from '../utils/jwt.strategy';

@Module({
  controllers: [AuthController],
  imports: [
    UserModule,
    JwtModule.register({
      secret: jwtSecret.key,
      signOptions: { expiresIn: '2h' },
    }),
    PassportModule,
  ],
  providers: [JwtStrategy],
  exports: [JwtModule],
})
export class AuthModule {}