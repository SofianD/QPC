import { FaceToFaceMiddleware } from './face-to-face.middleware';

describe('FaceToFaceMiddleware', () => {
  it('should be defined', () => {
    expect(new FaceToFaceMiddleware()).toBeDefined();
  });
});
