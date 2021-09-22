import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteVideoService } from './favorite-video.service';

describe('FavoriteVideoService', () => {
  let service: FavoriteVideoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteVideoService],
    }).compile();

    service = module.get<FavoriteVideoService>(FavoriteVideoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
