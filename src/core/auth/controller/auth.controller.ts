  
import { prop } from '@typegoose/typegoose';

import { JwtService } from '@nestjs/jwt';
import { Controller, Body, Post, HttpCode, HttpException, HttpStatus } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from 'src/core/user/service/user.service';
import { User } from 'src/shared/models/user.model';

@Controller('auth')
export class AuthController {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  @HttpCode(200)
  @Post('login')
  async login(@Body() user: User): Promise<{ user: User, accessToken: string }> {
    const userInDatabase = await this.userService.findFromEmail(user.email);
    if (!userInDatabase) {
      throw new HttpException({ message: 'User not found' }, HttpStatus.NOT_FOUND);
    }

    const result = bcrypt.compare(user.password, userInDatabase.password);
    if (!result) {
      throw new HttpException({ message: 'Authentification failed' }, HttpStatus.UNAUTHORIZED);
    }

    const payload = { key: userInDatabase._id };
    return {
      user: userInDatabase,
      accessToken: this.jwtService.sign(payload),
    };
  }
}