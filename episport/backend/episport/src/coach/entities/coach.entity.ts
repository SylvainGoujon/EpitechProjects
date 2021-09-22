import { FavoriteCoach } from 'src/favorite-coach/entities/favorite-coach.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Video } from '../../video/entities/video.entity'

@Entity()
export class Coach {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    photo: string;

    @OneToMany(() => Video, video => video.coach)
    videos: Video[];

    @OneToMany(() => FavoriteCoach,  favoriteCoach => favoriteCoach.coach)
    favoriteCoach: FavoriteCoach[];

}