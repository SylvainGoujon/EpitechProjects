import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiResponse, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('ABOUT')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiResponse({status: 200, description: 'return message', type: String})
  @Get()
  getAbout(): string {
    return this.appService.getAbout();
  }
}
