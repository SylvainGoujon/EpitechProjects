import { Video } from '../../video/entities/video.entity';
import { User } from '../../user/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class FavoriteVideo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    userId: number;

    @Column({ nullable: true })
    videoId: number;

    @ManyToOne(() => User, user => user.favoriteCoach)
    user: User;

    @ManyToOne(() => Video, video => video.favoriteCoach)
    video: Video;
}