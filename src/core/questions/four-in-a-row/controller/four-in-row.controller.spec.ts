import { Test, TestingModule } from '@nestjs/testing';
import { FourInRowController } from './four-in-row.controller';

describe('FourInRow Controller', () => {
  let controller: FourInRowController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FourInRowController],
    }).compile();

    controller = module.get<FourInRowController>(FourInRowController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
