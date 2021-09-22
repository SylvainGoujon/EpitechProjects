import { Controller, Get, Post, Req, Param, Delete, UseGuards, Res, HttpStatus } from '@nestjs/common';
import { FavoriteCoachService } from './favorite-coach.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import jwt_decode  from 'jwt-decode';
import { CoachService } from 'src/coach/coach.service';
import { Response } from '../model/response';
import { FavoriteCoach } from './entities/favorite-coach.entity';
import { ApiResponse, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('FAVORITE COACH')
@Controller('favorite-coach')
export class FavoriteCoachController {

  constructor(
    private readonly favoriteCoachService: FavoriteCoachService,
    private readonly coachService: CoachService
    ) {}

  @ApiOperation({ summary: 'Create one favorite from coach id / Need user account' })
  @ApiResponse({ status: 201, type: Response, description: 'body type: FavoriteCoach / the favorite just created' })
  @UseGuards(JwtAuthGuard)
  @Post('coach/:id')
  async addToMine(@Req() req: any, @Param('id') coach_id: string, @Res() res: any) {

    if (isNaN(+coach_id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    if (!await this.coachService.findOne(+coach_id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, " Coach ID not found !", null));
    }

    const token: string = req.cookies['Authentication'];
    const decodeToken: any = jwt_decode(token);
    const user_id: number = decodeToken.id;
    const is_admin: boolean = decodeToken.is_admin;

    if (await this.favoriteCoachService.findOne(+coach_id, user_id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, " Favorite already added !", null));
    }

    if (is_admin) {
      return res.status(HttpStatus.UNAUTHORIZED).json(new Response(false, "Admin cannot have favorites !", null));
    }

    const favorite: FavoriteCoach = await this.favoriteCoachService.create(user_id,+coach_id);
    return res.status(HttpStatus.CREATED).json(new Response(true, "Favorite added !", favorite));
  }

  @ApiOperation({ summary: 'Get all favorite coaches of connected user / Need user account' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Array<FavoriteCoach> / All favorites ' })
  @UseGuards(JwtAuthGuard)
  @Get()
  async findAllMine(@Req() req: any, @Res() res: any) {
    
    const token: string = req.cookies['Authentication'];
    const decodeToken: any = jwt_decode(token);
    const user_id: number = decodeToken.id;

    const favorites: Array<FavoriteCoach> = await this.favoriteCoachService.findByUser(user_id);
    return res.status(HttpStatus.OK).json(new Response(true, "Ok !", favorites));

  }

  @ApiOperation({ summary: 'Get favorite coach of connected user by coach id / Need user account' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: FavoriteCoach / Favorite just asked ' })
  @UseGuards(JwtAuthGuard)
  @Get('coach/:id')
  async findOne(@Req() req: any, @Param('id') coach_id: string, @Res() res: any) {
    
    if (isNaN(+coach_id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    const token: string = req.cookies['Authentication'];
    const decodeToken: any = jwt_decode(token);
    const user_id: number = decodeToken.id;

    const favorite: FavoriteCoach = await this.favoriteCoachService.findOne(+coach_id, user_id);
    if (!favorite) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Favorite not found !", null));
    }

    return res.status(HttpStatus.OK).json(new Response(true, "Ok !", favorite));

  }
  @ApiOperation({ summary: 'Delete favorite coach of connected user by coach id / Need user account' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: FavoriteCoach / Favorite just deleted' })
  @UseGuards(JwtAuthGuard)
  @Delete('coach/:id')
  async removeFromMine(@Req() req: any, @Param('id') coach_id: string, @Res() res: any) {

    if (isNaN(+coach_id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    const token: string = req.cookies['Authentication'];
    const decodeToken: any = jwt_decode(token);
    const user_id: number = decodeToken.id;

    if (! await this.favoriteCoachService.findOne(+coach_id, user_id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Favorite not found !", null));
    }
    
    const favorite: FavoriteCoach = await this.favoriteCoachService.remove(user_id, +coach_id);
    return res.status(HttpStatus.OK).json(new Response(true, "Favorite removed !", favorite));

  }

}
