import { Controller, Get, Post, Body, Patch, Param, Delete, Request, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import jwt_decode  from 'jwt-decode';
import { Response } from '../model/response';
import { User } from './entities/user.entity';
import { JwtAdminAuthGuard } from 'src/auth/guards/jwt-admin-auth.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ApiResponse, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('USER')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Create an user' })
  @ApiBody({ type: CreateUserDto })
  @ApiResponse({ status: 201, type: Response, description: 'body type: User / the user just created' })
  @Post()
  async create(@Body() createUserDto: CreateUserDto, @Res() res: any) {
   
    if (await this.userService.findByEmail(createUserDto.email)) {
      return res.status(HttpStatus.CONFLICT).json(new Response(false, "Email already used !", null));
    }

    if (await this.userService.findByUsername(createUserDto.username)) {
      return res.status(HttpStatus.CONFLICT).json(new Response(false, "Username already used !", null));
    }

    if (createUserDto.password !== createUserDto.conf_password) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Passwords don't match !", null));
    }
    
    createUserDto.is_admin = false;
    createUserDto.password = bcrypt.hashSync(createUserDto.password, 10);

    const user: User = await this.userService.create(createUserDto);

    return res.status(HttpStatus.CREATED).json(new Response(true, "User created !", user));

  }

  @ApiOperation({ summary: 'Get all users / Need administrator account' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Array<User> / All users ' })
  @UseGuards(JwtAdminAuthGuard)
  @Get()
  async findAll(@Res() res: any) {

    const users: Array<User> = await this.userService.findAll();
    return res.status(HttpStatus.OK).json(new Response(true, "Ok !", users));

  }

  @ApiOperation({ summary: 'Get user connected / Need user account' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: User / the user connected' })
  @UseGuards(JwtAuthGuard)
  @Get('me')
  async findOne(@Request() req: any, @Res() res: any) {
    const token: string = req.cookies['Authentication'];
    const decodeToken: any = jwt_decode(token);
    const id: number = decodeToken.id;

    const user: User = await this.userService.findOne(id);
    return res.status(HttpStatus.OK).json(new Response(true, "Ok !", user));

  }

  @ApiOperation({ summary: 'Update user connected / Need user account' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, type: Response, description: 'body type: User / the user just updated' })
  @UseGuards(JwtAuthGuard)
  @Patch('me')
  async updateMe(@Request() req: any, @Body() updateUserDto: UpdateUserDto, @Res() res: any) {

    const token: string = req.cookies['Authentication'];
    const decodeToken: any = jwt_decode(token);
    const id: number = decodeToken.id;

    if (updateUserDto.username && await this.userService.findByUsername(updateUserDto.username)) {
      return res.status(HttpStatus.CONFLICT).json(new Response(false, "Username already used !", null));
    }

    if (updateUserDto.email && await this.userService.findByEmail(updateUserDto.email)) {
      return res.status(HttpStatus.CONFLICT).json(new Response(false, "Email already used !", null));
    }

    if (updateUserDto.password && !updateUserDto.conf_password) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "confirm password is required !", null));
    }

    if (updateUserDto.password && updateUserDto.conf_password) {
      if (updateUserDto.password !== updateUserDto.conf_password) {
        return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Passwords don't match !", null));
      }
      else {
        updateUserDto.password = bcrypt.hashSync(updateUserDto.password, 10);
      }
    }
    
    const user: User = await this.userService.update(id, updateUserDto);
    return res.status(HttpStatus.OK).json(new Response(true, "User updated", user));

  }

  @ApiOperation({ summary: 'Update one user by id / Need administrator account' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, type: Response, description: 'body type: User / the user just updated' })
  @UseGuards(JwtAdminAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @Res() res: any) {
   
    if (isNaN(+id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    if (! await this.userService.findOne(+id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "User ID not found !", null));
    }

    if (updateUserDto.email && await this.userService.findByEmail(updateUserDto.email)) {
      return res.status(HttpStatus.CONFLICT).json(new Response(false, "Email already used !", null));
    }

    if (updateUserDto.username && await this.userService.findByUsername(updateUserDto.username)) {
      return res.status(HttpStatus.CONFLICT).json(new Response(false, "Username already used !", null));
    }

    if (updateUserDto.password || updateUserDto.conf_password) {
      return res.status(HttpStatus.UNAUTHORIZED).json(new Response(false, "Admin can't modify password !", null));
    }

    const user: User = await this.userService.update(+id, updateUserDto);
    return res.status(HttpStatus.OK).json(new Response(true, "User updated", user));

  }

  @ApiOperation({ summary: 'Delete one user by id / Need administrator account' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: User / the user just deleted' })
  @UseGuards(JwtAdminAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: any) {

    if (isNaN(+id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    if (! await this.userService.findOne(+id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "User ID not found !", null));
    }
    
    const user: User = await this.userService.remove(+id);
    return res.status(HttpStatus.OK).json(new Response(true, "User deleted", user));

  }

}
