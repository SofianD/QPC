import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class NineWinPointsMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    next();
  }
}
