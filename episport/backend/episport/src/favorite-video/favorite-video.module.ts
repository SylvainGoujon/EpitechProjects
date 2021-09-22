import { Module } from '@nestjs/common';
import { FavoriteVideoService } from './favorite-video.service';
import { FavoriteVideoController } from './favorite-video.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoriteVideo } from './entities/favorite-video.entity';
import { UserModule } from 'src/user/user.module';
import { VideoModule } from 'src/video/video.module';

@Module({
  imports: [TypeOrmModule.forFeature([FavoriteVideo]), UserModule, VideoModule],
  controllers: [FavoriteVideoController],
  providers: [FavoriteVideoService],
  exports: [FavoriteVideoService]
})
export class FavoriteVideoModule {}
