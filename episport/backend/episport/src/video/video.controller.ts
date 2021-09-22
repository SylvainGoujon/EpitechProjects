import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Res, HttpStatus, Query } from '@nestjs/common';
import { VideoService } from './video.service';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { JwtAdminAuthGuard } from 'src/auth/guards/jwt-admin-auth.guard';
import { Video } from './entities/video.entity';
import { Response } from '../model/response';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CoachService } from 'src/coach/coach.service';
import { CategoryService } from 'src/category/category.service';
import { ApiResponse, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('VIDEO')
@Controller('video')
export class VideoController {
  
  constructor(
    private readonly videoService: VideoService,
    private readonly coachService: CoachService,
    private readonly categoryService: CategoryService  
  ) {}

  @ApiOperation({ summary: 'Create one video / Need administrator account' })
  @ApiBody({ type: CreateVideoDto })
  @ApiResponse({ status: 201, type: Response, description: 'body type: Video / the video just created' })
  @UseGuards(JwtAdminAuthGuard)
  @Post()
  async create(@Body() createVideoDto: CreateVideoDto, @Res() res: any) {

    if (!await this.categoryService.findOne(createVideoDto.category_id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Category ID not found !", null));
    }

    if (!await this.coachService.findOne(createVideoDto.coach_id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Coach ID not found !", null));
    }

    const video: Video = await this.videoService.create(createVideoDto);
    return res.status(HttpStatus.CREATED).json(new Response(true, "Video created !", video));
  
  }

  @ApiOperation({ summary: 'Get all videos / Need user account' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Array<Video> / All videos ' })
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll(@Res() res: any) {
    
    const videos: Array<Video> = await this.videoService.findAll();
    return res.status(HttpStatus.OK).json(new Response(true, "Ok !", videos));

  }

  @ApiOperation({ summary: 'Get videos by category id / Need user account' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Array<Video> / All videos of category id' })
  @UseGuards(JwtAuthGuard)
  @Get('category/:id')
  async findByCategory(@Param('id') category_id :string, @Res() res: any) {
    
    if (isNaN(+category_id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    const videos: Array<Video> = await this.videoService.findByCategory(+category_id);
    return res.status(HttpStatus.OK).json(new Response(true, "Ok !", videos));

  }

  @ApiOperation({ summary: 'Get videos by coach id / Need user account' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Array<Video> / All videos of coach id' })
  @UseGuards(JwtAuthGuard)
  @Get('coach/:id')
  async findByCoach(@Param('id') coach_id :string, @Res() res: any) {
    
    if (isNaN(+coach_id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    const videos: Array<Video> = await this.videoService.findByCoach(+coach_id);
    return res.status(HttpStatus.OK).json(new Response(true, "Ok !", videos));

  }

  @ApiOperation({ summary: 'Get videos by query search / Need user account' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Array<Video> / All videos corresponding to query' })
  @UseGuards(JwtAuthGuard)
  @Get('search')
  async findByQuery(@Query('query') query :string, @Res() res: any) {
    
    const videos: Array<Video> = await this.videoService.findByQuery(query);
    return res.status(HttpStatus.OK).json(new Response(true, "Ok !", videos));

  }

  @ApiOperation({ summary: 'Get one video by id' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Video / the video just asked' })
  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: any) {
    
    if (isNaN(+id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    if (! await this.videoService.findOne(+id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Video ID not found !", null));
    }

    const video: Video = await this.videoService.findOne(+id);
    return res.status(HttpStatus.OK).json(new Response(true, "Ok !", video));

  }

  @ApiOperation({ summary: 'Update one video by id / Need administrator account' })
  @ApiBody({ type: UpdateVideoDto })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Video / the video just updated' })
  @UseGuards(JwtAdminAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateVideoDto: UpdateVideoDto, @Res() res: any) {
   
    if (isNaN(+id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    if (! await this.videoService.findOne(+id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Video ID not found !", null));
    }

    if (updateVideoDto.category_id !== undefined && !await this.categoryService.findOne(updateVideoDto.category_id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Category ID not found !", null));
    }

    if (updateVideoDto.coach_id !== undefined && !await this.coachService.findOne(updateVideoDto.coach_id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Coach ID not found !", null));
    }

    const video: Video = await this.videoService.update(+id, updateVideoDto);
    return res.status(HttpStatus.OK).json(new Response(true, "Video updated", video));

  }

  @ApiOperation({ summary: 'Delete one video by id / Need administrator account' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Video / the video just deleted' })
  @UseGuards(JwtAdminAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: any) {

    if (isNaN(+id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    if (! await this.videoService.findOne(+id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Video ID not found !", null));
    }
    
    const video: Video = await this.videoService.remove(+id);
    return res.status(HttpStatus.OK).json(new Response(true, "Video deleted", video));

  }

}
