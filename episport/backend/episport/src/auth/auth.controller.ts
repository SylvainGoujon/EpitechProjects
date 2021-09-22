import { Controller, Req, Res, Get, Post, UseGuards, Logger, HttpStatus } from '@nestjs/common';
import { User } from 'src/user/entities/user.entity';
import { DeepPartial } from 'typeorm';
import { AuthService } from './auth.service';
import { JwtAdminAuthGuard } from './guards/jwt-admin-auth.guard';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Response } from '../model/response';
import { ApiResponse, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { Credential } from '../model/credential';

@ApiTags('AUTHENTICATION')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  
  @ApiOperation({ summary: 'Log in' })
  @ApiBody({ type: Credential})
  @ApiResponse({ status: 200, type: Response, description: 'body type: String / the user just logged in' })
  /* This guard don't protect the route. */ 
  /* It defines the strategy of authentication */
  @UseGuards(LocalAuthGuard)
  @Post('/login')
  async login(@Req() req: any, @Res() res: any) {

    const cookie = this.authService.getCookieWithJwtToken(req.user);
    res.setHeader('Set-Cookie', cookie);
    
    const { password, ...user }: DeepPartial<User> = req.user;
    return res.status(HttpStatus.OK).json(new Response(true, "User logged in !", user));

  }

  @ApiOperation({ summary: 'Log out' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: null' })
  @Get('/logout')
  async logout(@Res() res) {
    
    const cookie = `Authentication=; HttpOnly; Path=/; Max-Age=${-1}`;
    res.setHeader('Set-Cookie', cookie);

    return res.status(HttpStatus.OK).json(new Response(true, "User logged out !", null));
  
  }

  @ApiOperation({ summary: 'Check if the user is administrator' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: null' })
  @UseGuards(JwtAdminAuthGuard)
  @Get('/isadmin')
  async isadmin(@Res() res) {

    return res.status(HttpStatus.OK).json(new Response(true, "User is admin !", null));

  }

  @ApiOperation({ summary: 'Check if the user is connected' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: null' })
  @UseGuards(JwtAuthGuard)
  @Get('/isconnected')
  async isconnected(@Res() res) {

    return res.status(HttpStatus.OK).json(new Response(true, "User is connected !", null));

  }

}
