import { ApiProperty} from '@nestjs/swagger';

export class Credential {
    @ApiProperty()
    email: String;
    @ApiProperty()
    password: String;
}