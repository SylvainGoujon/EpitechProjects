import { IsNotEmpty, IsString, IsDefined, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateVideoDto {
    
    @ApiProperty()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    title: string;

    @ApiProperty()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    link: string;

    @ApiProperty()
    @IsDefined()
    @IsNumber()
    @IsNotEmpty()
    category_id: number;

    @ApiProperty()
    @IsDefined()
    @IsNumber()
    @IsNotEmpty() 
    coach_id: number;
}
