import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteCoachService } from './favorite-coach.service';

describe('FavoriteCoachService', () => {
  let service: FavoriteCoachService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FavoriteCoachService],
    }).compile();

    service = module.get<FavoriteCoachService>(FavoriteCoachService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
