import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Video } from '../../video/entities/video.entity';
import { ApiProperty } from '@nestjs/swagger';


@Entity()
export class Category {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({unique: true})
    name: string;

    @OneToMany(() => Video, video => video.category)
    videos: Video[];

}
