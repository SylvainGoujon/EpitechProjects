import { Coach } from '../../coach/entities/coach.entity';
import { User } from '../../user/entities/user.entity';
import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';

@Entity()
export class FavoriteCoach {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    userId: number;

    @Column({ nullable: true })
    coachId: number;

    @ManyToOne(() => User, user => user.favoriteCoach)
    user: User;

    @ManyToOne(() => Coach, coach => coach.favoriteCoach)
    coach: Coach;
}