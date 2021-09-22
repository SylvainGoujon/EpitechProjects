import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Coach } from '../../coach/entities/coach.entity';
import { Category } from '../../category/entities/category.entity';
import { FavoriteCoach } from 'src/favorite-coach/entities/favorite-coach.entity';

@Entity()
export class Video {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    title: string;

    @Column()
    link: string;

    @Column({ nullable: true })
    categoryId: number;

    @Column({ nullable: true })
    coachId: number;

    @ManyToOne(() => Category, category => category.videos)
    category: Category;

    @ManyToOne(() => Coach, coach => coach.videos)
    coach: Coach;

    @OneToMany(() => FavoriteCoach,  favoriteCoach => favoriteCoach.coach)
    favoriteCoach: FavoriteCoach[];

}