import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CoachService } from 'src/coach/coach.service';
import { Coach } from 'src/coach/entities/coach.entity';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { Repository, UsingJoinColumnIsNotAllowedError } from 'typeorm';
import { FavoriteCoach } from './entities/favorite-coach.entity';

@Injectable()
export class FavoriteCoachService {
  
  constructor(
    @InjectRepository(FavoriteCoach)
    private favoriteCoachRepository: Repository<FavoriteCoach>,
    private coachService: CoachService,
    private userService: UserService
  ) {}
  
  async create(user_id: number, coach_id: number): Promise<FavoriteCoach|undefined> {
    const coach: Coach = await this.coachService.findOne(coach_id);
    const user: User = await this.userService.findOne(user_id);

    const favoriteCoach: Partial<FavoriteCoach> = {
      user: user,
      coach: coach
    };

    return await this.favoriteCoachRepository.save(favoriteCoach);
  }

  async findByUser(user_id: number): Promise<Array<FavoriteCoach>> {
    return await this.favoriteCoachRepository.find({user: {id: user_id}});
  }

  async findOne(coach_id: number, user_id: number): Promise<FavoriteCoach|undefined> {
    return await this.favoriteCoachRepository.findOne({user: {id: user_id}, coach: {id: coach_id}});
  }

  async remove(user_id: number, coach_id: number): Promise<FavoriteCoach|undefined> {
    const favorite: FavoriteCoach|undefined = await this.favoriteCoachRepository.findOne({user: {id: user_id}, coach: {id: coach_id}});
    await this.favoriteCoachRepository.delete(favorite);
    return favorite;
  }

}
