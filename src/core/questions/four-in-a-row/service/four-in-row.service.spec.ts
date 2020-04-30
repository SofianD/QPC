import { Test, TestingModule } from '@nestjs/testing';
import { FourInRowService } from './four-in-row.service';

describe('FourInRowService', () => {
  let service: FourInRowService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FourInRowService],
    }).compile();

    service = module.get<FourInRowService>(FourInRowService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
