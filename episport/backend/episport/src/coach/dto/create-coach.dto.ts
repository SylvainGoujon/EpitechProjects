import { IsNotEmpty, IsString, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCoachDto {

    @ApiProperty()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    description: string;

}
