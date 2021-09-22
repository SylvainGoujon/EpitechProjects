import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { Video } from 'src/video/entities/video.entity';
import { VideoService } from 'src/video/video.service';
import { Repository } from 'typeorm';
import { FavoriteVideo } from './entities/favorite-video.entity';

@Injectable()
export class FavoriteVideoService {
    
  constructor(
    @InjectRepository(FavoriteVideo)
    private favoriteVideoRepository: Repository<FavoriteVideo>,
    private videoService: VideoService,
    private userService: UserService
  ) {}
  
  async create(user_id: number, video_id: number): Promise<FavoriteVideo|undefined> {
    const video: Video = await this.videoService.findOne(video_id);
    const user: User = await this.userService.findOne(user_id);

    const FavoriteVideo: Partial<FavoriteVideo> = {
      user: user,
      video: video
    };

    return await this.favoriteVideoRepository.save(FavoriteVideo);
  }

  async findByUser(user_id: number): Promise<Array<FavoriteVideo>> {
    return await this.favoriteVideoRepository.find({user: {id: user_id}});
  }

  async findOne(video_id: number, user_id: number): Promise<FavoriteVideo|undefined> {
    return await this.favoriteVideoRepository.findOne({user: {id: user_id}, video: {id: video_id}});
  }

  async remove(user_id: number, video_id: number): Promise<FavoriteVideo|undefined> {
    const favorite: FavoriteVideo|undefined = await this.favoriteVideoRepository.findOne({user: {id: user_id}, video: {id: video_id}});
    await this.favoriteVideoRepository.delete(favorite);
    return favorite;
  }
}
