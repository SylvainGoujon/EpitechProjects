import { Test, TestingModule } from '@nestjs/testing';
import { FavoriteCoachController } from './favorite-coach.controller';
import { FavoriteCoachService } from './favorite-coach.service';

describe('FavoriteCoachController', () => {
  let controller: FavoriteCoachController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FavoriteCoachController],
      providers: [FavoriteCoachService],
    }).compile();

    controller = module.get<FavoriteCoachController>(FavoriteCoachController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
