import { Body, Controller, Post, HttpException, HttpStatus, Get, Param, Res, HttpCode, UseGuards } from '@nestjs/common';
import { UserService } from '../service/user.service';
import { User } from 'src/shared/models/user.model';
import { Response } from 'express';
import { AuthGuard } from 'src/shared/guards/auth.guard';
import * as jwt from 'jsonwebtoken';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  async create(@Body('user') user: User): Promise<{user: any, accessToken: string, expiresIn: number}> {
    if (!user.email || !user.password) {
      throw new HttpException({ message: 'Invalid user' }, HttpStatus.BAD_REQUEST);
    }

    const userFromEmail = await this.userService.findFromEmail(user.email);
    if (userFromEmail) {
      throw new HttpException({ message: 'Email already used' }, HttpStatus.CONFLICT);
    }

    try {
      const userInDb = await this.userService.create(user);
      return {
        user: userInDb,
        accessToken: jwt.sign(
            {key: userInDb._id},
            '167CD6DC2E719C1CE671DBAEA8465'
        ),
        expiresIn: 3600
    };
    } catch (error) {
      throw new HttpException({ message: 'Failed to save user' }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
    
  }

  @Get('/current')
  @UseGuards(AuthGuard)
  async current(@Res() res: Response): Promise<void> {
    try {
      const user = await this.userService.find(res.locals.jwtPayload.key);
      res.status(200).json(user);
    } catch (error) {
      throw new HttpException({ message: 'User not found', error }, HttpStatus.NOT_FOUND);
    }
  }

  @Get('/:id')
  async find(@Param('id') id: string): Promise<User> {
    try {
      return await this.userService.find(id);
    } catch (error) {
      throw new HttpException({ message: 'User not found' }, HttpStatus.NOT_FOUND);
    }
  }


  // @Post('/check/pseudo')
  // @HttpCode(200)
  // async validPseudonyme(@Body() user: User): Promise<any> {
  //   if (!user.pseudo) {
  //     throw new HttpException({ message: 'Invalid pseudonyme' }, HttpStatus.BAD_REQUEST);
  //   }

  //   const userFromPseudo = await this.userService.findFromPseudonyme(user.pseudo);
  //   if (userFromPseudo) {
  //     throw new HttpException({ message: `Pseudonyme ${user.pseudo} already exists.` }, HttpStatus.CONFLICT);
  //   }

  //   return { message: 'Pseudonyme is valid' };
  // }
}