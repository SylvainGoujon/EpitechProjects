import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { JwtAdminAuthGuard } from 'src/auth/guards/jwt-admin-auth.guard';
import { CoachService } from './coach.service';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { Coach } from './entities/coach.entity';
import { Response } from '../model/response';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { unlinkSync } from 'fs';
import { ApiResponse, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('COACH')
@Controller('coach')
export class CoachController {

  constructor(private readonly coachService: CoachService) {}

  @ApiOperation({ summary: 'Create one coach / Need administrator account' })
  @ApiBody({ type: CreateCoachDto })
  @ApiResponse({ status: 201, type: Response, description: 'body type: Coach / the coach just created' })
  @UseGuards(JwtAdminAuthGuard)
  @Post()
  async create(@Body() createCoachDto: CreateCoachDto, @Res() res: any) {

    const coach: Coach = await this.coachService.create(createCoachDto);
    return res.status(HttpStatus.CREATED).json(new Response(true, "Coach created !", coach));
  
  }
  @ApiOperation({ summary: 'Get all coaches' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Array<Coach> / All coaches ' })
  @Get()
  async findAll(@Res() res: any) {
    
    const coaches: Array<Coach> = await this.coachService.findAll();
    return res.status(HttpStatus.OK).json(new Response(true, "Ok !", coaches));

  }

  @ApiOperation({ summary: 'Get one coach by id' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Coach / the coach just asked' })
  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: any) {
    
    if (isNaN(+id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    if (! await this.coachService.findOne(+id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Coach ID not found !", null));
    }

    const coach: Coach = await this.coachService.findOne(+id);
    return res.status(HttpStatus.OK).json(new Response(true, "Ok !", coach));

  }

  @ApiOperation({ summary: 'Update one coach by id / Need administrator account' })
  @ApiBody({ type: UpdateCoachDto })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Coach / the coach just updated' })
  @UseGuards(JwtAdminAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCoachDto: UpdateCoachDto, @Res() res: any) {
   
    if (isNaN(+id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    if (! await this.coachService.findOne(+id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Coach ID not found !", null));
    }

    const coach: Coach = await this.coachService.update(+id, updateCoachDto);
    return res.status(HttpStatus.OK).json(new Response(true, "Coach updated", coach));

  }

  @ApiOperation({ summary: 'Delete one coach by id / Need administrator account' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Coach / the coach just deleted' })
  @UseGuards(JwtAdminAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: any) {

    if (isNaN(+id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    if (! await this.coachService.findOne(+id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Coach ID not found !", null));
    }
    
    const coach: Coach = await this.coachService.remove(+id);
    return res.status(HttpStatus.OK).json(new Response(true, "Coach deleted", coach));

  }

  @ApiOperation({ summary: 'Get one picture by coach id' })
  @ApiResponse({ status: 200, type: Response, description: "body type: any / the coach's picture just asked" })
  @Get(':id/picture')
  async getPicture(@Param('id') id: string, @Res() res) {
    const picturename: string = await this.coachService.getCoachPicture(+id);
    return res.sendFile(picturename, { root: './upload/images' });
  }

  @ApiOperation({ summary: "Change coach's picture / Need administrator account" })
  @ApiBody({ description: "A file is needed: form-data with key 'image'" })
  @ApiResponse({ status: 200, type: Response, description: 'body type: string / the name of the picture as it is written in DB' })
  @Post(':id/picture')
  @UseInterceptors(FileInterceptor('image', {
    storage: diskStorage({
      destination: './upload/images',
      filename: function (req, file, callback) {
        const picturename: string = Date.now().toString() + file.originalname;
        callback(null, picturename);
      },
    }),
  }))
  async uploadPicture(@Param('id') id: string, @UploadedFile() file: Express.Multer.File, @Res() res: any) {

    if (!file) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "No file !", null));
    }    

    if (isNaN(+id)) {
      unlinkSync(`./upload/images/${file.filename}`);
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    if (! await this.coachService.findOne(+id)) {
      unlinkSync(`./upload/images/${file.filename}`);
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Coach ID not found !", null));
    }

    const oldpicture: string = await this.coachService.getCoachPicture(+id)
    await this.coachService.changePicture(+id, file.filename);
    if (oldpicture !== 'default.png') {
      unlinkSync(`./upload/images/${oldpicture}`);
    } 

    return res.status(HttpStatus.OK).json(new Response(true, "Image uploaded and stored", file.filename));
  
  }

}

