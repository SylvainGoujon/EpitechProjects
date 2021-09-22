import { IsNotEmpty, IsEmail, IsString, IsBoolean, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {

    @ApiProperty()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    username: string;

    @ApiProperty()
    @IsDefined()
    @IsString()
    @IsEmail()
    email: string;

    @ApiProperty()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    password: string;

    @ApiProperty()
    @IsDefined()
    @IsString()
    @IsNotEmpty()
    conf_password: string;
 
    @ApiProperty()
    @IsDefined()
    @IsBoolean()
    is_admin: boolean;
    
}