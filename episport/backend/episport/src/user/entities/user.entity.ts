import { FavoriteCoach } from 'src/favorite-coach/entities/favorite-coach.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({unique: true})
    username: string;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({ default: false })
    is_admin: boolean;

    @OneToMany(() => FavoriteCoach,  favoriteCoach => favoriteCoach.user)
    favoriteCoach: FavoriteCoach[];

}


