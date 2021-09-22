import { Module } from '@nestjs/common';
import { FavoriteCoachService } from './favorite-coach.service';
import { FavoriteCoachController } from './favorite-coach.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteCoach } from './entities/favorite-coach.entity';
import { UserModule } from 'src/user/user.module';
import { CoachModule } from 'src/coach/coach.module';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteCoach]), UserModule, CoachModule],
  controllers: [FavoriteCoachController],
  providers: [FavoriteCoachService],
  exports: [FavoriteCoachService]
})
export class FavoriteCoachModule {}
