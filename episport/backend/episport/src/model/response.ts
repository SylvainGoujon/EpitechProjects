import IResponse from "./iresponse";
import { ApiProperty} from '@nestjs/swagger';

export class Response<T> implements IResponse<T> {

    @ApiProperty()
    success: boolean;
    @ApiProperty()
    message: string | null;
    @ApiProperty()
    body: any;

    constructor(success: boolean, message: string, body: T) {
        this.success = success;
        this.message = message;
        this.body = body;
    }

}