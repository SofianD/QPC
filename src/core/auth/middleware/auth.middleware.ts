import { Injectable, NestMiddleware } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private jwtService: JwtService) {}

  use(req: Request, res: Response, next: () => void) {
    const token = <string>req.headers.token;
    let jwtPayload;

    try {
      jwtPayload = <any>this.jwtService.verify(token);
    } catch (error) {
    }
    res.locals.jwtPayload = jwtPayload;
    next();
  }
}
