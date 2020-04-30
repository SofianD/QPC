import { Test, TestingModule } from '@nestjs/testing';
import { NineWinPointsService } from './nine-win-points.service';

describe('NineWinPointsService', () => {
  let service: NineWinPointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NineWinPointsService],
    }).compile();

    service = module.get<NineWinPointsService>(NineWinPointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
