import { Test, TestingModule } from '@nestjs/testing';
import { FaceToFaceController } from './face-to-face.controller';

describe('FaceToFace Controller', () => {
  let controller: FaceToFaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FaceToFaceController],
    }).compile();

    controller = module.get<FaceToFaceController>(FaceToFaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
