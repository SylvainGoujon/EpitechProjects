import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { Coach } from './entities/coach.entity';

@Injectable()
export class CoachService {

  constructor(
    @InjectRepository(Coach)
    private coachRepository: Repository<Coach>,
  ) {}
  
  async create(createCoachDto: CreateCoachDto): Promise<Coach|undefined> {
    let coach: DeepPartial<Coach> = createCoachDto;
    coach.photo = 'default.png';
    await this.coachRepository.save(coach);
    return await this.coachRepository.findOne({name: createCoachDto.name});
  }

  async findAll(): Promise<Array<Coach>> {
    return await this.coachRepository.find();
  }

  async findOne(id: number): Promise<Coach|undefined> {
    return await this.coachRepository.findOne(id);
  }

  async update(id: number, updateCoachDto: UpdateCoachDto): Promise<Coach|undefined> {
    let coach: DeepPartial<Coach> = updateCoachDto
    coach.id = id;
    await this.coachRepository.save(coach);
    return await this.coachRepository.findOne(id);
  }

  async remove(id: number): Promise<Coach|undefined> {
    const coach: Coach|undefined = await this.coachRepository.findOne(id);
    await this.coachRepository.delete(id);
    return coach;
  }

  async changePicture(id: number, photo: string): Promise<Coach|undefined> {
    let coach: DeepPartial<Coach> = {
      id: id,
      photo: photo
    };
    await this.coachRepository.save(coach)
    return await this.coachRepository.findOne(id);
  }

  async getCoachPicture(id: number): Promise<string> {
    const coach: Coach = await this.coachRepository.findOne(id);
    return coach.photo;
  }

}
