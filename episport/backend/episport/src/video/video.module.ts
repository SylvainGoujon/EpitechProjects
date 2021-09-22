import { Module } from '@nestjs/common';
import { VideoService } from './video.service';
import { VideoController } from './video.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Video } from './entities/video.entity';
import { CategoryModule } from 'src/category/category.module';
import { CoachModule } from 'src/coach/coach.module';

@Module({
  imports: [TypeOrmModule.forFeature([Video]), CategoryModule, CoachModule],
  controllers: [VideoController],
  providers: [VideoService],
  exports: [VideoService]
})
export class VideoModule {}
