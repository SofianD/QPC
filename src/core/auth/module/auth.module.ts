import { JwtModule } from '@nestjs/jwt';
import { Module, forwardRef } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from '../controller/auth.controller';
import { UserModule } from 'src/core/user/user.module';
import { jwtSecret } from '../utils/jwt.secret';
import { JwtStrategy } from '../utils/jwt.strategy';

@Module({
  controllers: [AuthController],
  imports: [
    JwtModule.register({
      secret: jwtSecret.key,
      signOptions: { expiresIn: '2h' },
    }),
    PassportModule,
    forwardRef(() => UserModule),
  ],
  providers: [JwtStrategy],
  exports: [JwtModule],
})
export class AuthModule {
}