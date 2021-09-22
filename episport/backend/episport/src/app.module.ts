import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';
import { CoachModule } from './coach/coach.module';
import { VideoModule } from './video/video.module';
import { FavoriteCoachModule } from './favorite-coach/favorite-coach.module';
import { FavoriteVideoModule } from './favorite-video/favorite-video.module';
import { AuthModule } from './auth/auth.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UserModule,
    CategoryModule,
    CoachModule,
    VideoModule,
    FavoriteCoachModule,
    FavoriteVideoModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
