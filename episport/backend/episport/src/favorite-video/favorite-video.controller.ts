import { Controller, Get, Post, Req, Param, Delete, UseGuards, Res, HttpStatus } from '@nestjs/common';
import { FavoriteVideoService } from './favorite-video.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import jwt_decode  from 'jwt-decode';
import { VideoService } from 'src/video/video.service';
import { Response } from '../model/response';
import { FavoriteVideo } from './entities/favorite-video.entity';
import { ApiResponse, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('FAVORITE VIDEO')
@Controller('favorite-video')
export class FavoriteVideoController {

  constructor(
    private readonly favoriteVideoService: FavoriteVideoService,
    private readonly videoService: VideoService
    ) {}

  @ApiOperation({ summary: 'Create one favorite from video id / Need user account' })
  @ApiResponse({ status: 201, type: Response, description: 'body type: FavoriteVideo / the favorite just created' })
  @UseGuards(JwtAuthGuard)
  @Post('video/:id')
  async addToMine(@Req() req: any, @Param('id') video_id: string, @Res() res: any) {

    if (isNaN(+video_id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    if (!await this.videoService.findOne(+video_id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, " Video ID not found !", null));
    }

    const token: string = req.cookies['Authentication'];
    const decodeToken: any = jwt_decode(token);
    const user_id: number = decodeToken.id;
    const is_admin: boolean = decodeToken.is_admin;

    if (await this.favoriteVideoService.findOne(+video_id, user_id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, " Favorite already added !", null));
    }

    if (is_admin) {
      return res.status(HttpStatus.UNAUTHORIZED).json(new Response(false, "Admin cannot have favorites !", null));
    }

    const favorite: FavoriteVideo = await this.favoriteVideoService.create(user_id, +video_id);
    return res.status(HttpStatus.CREATED).json(new Response(true, "Favorite added !", favorite));
  }

  @ApiOperation({ summary: 'Get all favorite videos of connected user / Need user account' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Array<FavoriteVideo> / All favorites ' })
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAllMine(@Req() req: any, @Res() res: any) {
    
    const token: string = req.cookies['Authentication'];
    const decodeToken: any = jwt_decode(token);
    const user_id: number = decodeToken.id;

    const favorites: Array<FavoriteVideo> = await this.favoriteVideoService.findByUser(user_id);
    return res.status(HttpStatus.OK).json(new Response(true, "Ok !", favorites));

  }

  @ApiOperation({ summary: 'Get favorite video of connected user by video id / Need user account' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: FavoriteVideo / Favorite just asked ' })
  @UseGuards(JwtAuthGuard)
  @Get('video/:id')
  async findOne(@Req() req: any, @Param('id') video_id: string, @Res() res: any) {
    
    if (isNaN(+video_id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    const token: string = req.cookies['Authentication'];
    const decodeToken: any = jwt_decode(token);
    const user_id: number = decodeToken.id;

    const favorite: FavoriteVideo = await this.favoriteVideoService.findOne(+video_id, user_id);
    if (!favorite) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Favorite not found !", null));
    }

    return res.status(HttpStatus.OK).json(new Response(true, "Ok !", favorite));

  }

  @ApiOperation({ summary: 'Delete favorite video of connected user by video id / Need user account' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: FavoriteVideo / Favorite just deleted' })
  @UseGuards(JwtAuthGuard)
  @Delete('video/:id')
  async removeFromMine(@Req() req: any, @Param('id') video_id: string, @Res() res: any) {

    if (isNaN(+video_id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    const token: string = req.cookies['Authentication'];
    const decodeToken: any = jwt_decode(token);
    const user_id: number = decodeToken.id;

    if (! await this.favoriteVideoService.findOne(+video_id, user_id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Favorite not found !", null));
    }
    
    const favorite: FavoriteVideo = await this.favoriteVideoService.remove(user_id, +video_id);
    return res.status(HttpStatus.OK).json(new Response(true, "Favorite removed !", favorite));

  }

}
