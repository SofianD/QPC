import { jwtSecret } from './jwt.secret';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from 'src/shared/models/user.model';
import { UserService } from 'src/core/user/service/user.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userSerivce: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret.key,
    });
  }

  async validate(
    payload: { key: string },
    done: (error: Error, user: User | false) => any,
  ) {
    const user = await this.userSerivce.find(payload.key);

    if (!user) {
      return done(new UnauthorizedException(), false);
    }
    done(null, user);
  }
}