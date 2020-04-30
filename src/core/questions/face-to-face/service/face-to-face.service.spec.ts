import { Test, TestingModule } from '@nestjs/testing';
import { FaceToFaceService } from './face-to-face.service';

describe('FaceToFaceService', () => {
  let service: FaceToFaceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FaceToFaceService],
    }).compile();

    service = module.get<FaceToFaceService>(FaceToFaceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
