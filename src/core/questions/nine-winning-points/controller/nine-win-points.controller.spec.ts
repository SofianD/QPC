import { Test, TestingModule } from '@nestjs/testing';
import { NineWinPointsController } from './nine-win-points.controller';

describe('NineWinPoints Controller', () => {
  let controller: NineWinPointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NineWinPointsController],
    }).compile();

    controller = module.get<NineWinPointsController>(NineWinPointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
