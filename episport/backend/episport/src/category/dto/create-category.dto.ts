import { IsNotEmpty, IsString, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoryDto {

    @ApiProperty()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    name: string;

}
