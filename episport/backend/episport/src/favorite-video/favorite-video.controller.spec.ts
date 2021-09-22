import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteVideoController } from './favorite-video.controller';
import { FavoriteVideoService } from './favorite-video.service';

describe('FavoriteVideoController', () => {
  let controller: FavoriteVideoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteVideoController],
      providers: [FavoriteVideoService],
    }).compile();

    controller = module.get<FavoriteVideoController>(FavoriteVideoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
