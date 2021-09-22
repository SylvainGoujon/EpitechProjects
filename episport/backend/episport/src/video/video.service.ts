import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryService } from 'src/category/category.service';
import { Category } from 'src/category/entities/category.entity';
import { CoachService } from 'src/coach/coach.service';
import { Coach } from 'src/coach/entities/coach.entity';
import { DeepPartial, Repository } from 'typeorm';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { Video } from './entities/video.entity';
import {Like} from "typeorm";

@Injectable()
export class VideoService {

  constructor(
    @InjectRepository(Video)
    private videoRepository: Repository<Video>,
    private coachService: CoachService,
    private categoryService: CategoryService
  ) {}

  async create(createVideoDto: CreateVideoDto): Promise<Video|undefined> {
    const coach: Coach = await this.coachService.findOne(createVideoDto.coach_id);
    const category: Category = await this.categoryService.findOne(createVideoDto.category_id);
    let video: DeepPartial<Video> = {
      title: createVideoDto.title,
      link: createVideoDto.link,
      category: category,
      coach: coach
    };
    return await this.videoRepository.save(video);
  }

  async findAll(): Promise<Array<Video>> {
    return await this.videoRepository.find();
  }

  async findByCategory(category_id: number): Promise<Array<Video>> {
    return await this.videoRepository.find({category: {id: category_id}});
  }

  async findByCoach(coach_id: number): Promise<Array<Video>> {
    return await this.videoRepository.find({coach: {id: coach_id}});
  }

  async findByQuery(query: string): Promise<Array<Video>> {
    return await this.videoRepository.find({title: Like(`%${query}%`)});
  }

  async findOne(id: number): Promise<Video|undefined> {
    return await this.videoRepository.findOne(id);
  }

  async update(id: number, updateVideoDto: UpdateVideoDto): Promise<Video|undefined> {
    let video: DeepPartial<Video> = {id: id}
    if (updateVideoDto.link) {
      video.link = updateVideoDto.link;
    }
    if (updateVideoDto.title) {
      video.title = updateVideoDto.title;
    }
    if (updateVideoDto.category_id) {
      video.category = await this.categoryService.findOne(updateVideoDto.category_id);
    }
    if (updateVideoDto.coach_id) {
      video.coach = await this.coachService.findOne(updateVideoDto.coach_id);
    }
    return await this.videoRepository.save(video);
  }

  async remove(id: number): Promise<Video|undefined> {
    const video: Video|undefined = await this.videoRepository.findOne(id);
    await this.videoRepository.delete(id);
    return video;
  }

}
