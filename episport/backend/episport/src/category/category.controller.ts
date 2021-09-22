import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category} from './entities/category.entity';
import { Response } from '../model/response';
import { JwtAdminAuthGuard } from 'src/auth/guards/jwt-admin-auth.guard';
import { ApiResponse, ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('CATEGORY')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({ summary: 'Create one category / Need administrator account' })
  @ApiBody({ type: CreateCategoryDto })
  @ApiResponse({ status: 201, type: Response, description: 'body type: Category / the category just created' })
  @UseGuards(JwtAdminAuthGuard)
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto, @Res() res: any) {

    if (await this.categoryService.findByName(createCategoryDto.name)) {
      return res.status(HttpStatus.CONFLICT).json(new Response(false, "Name already used !", null));
    }

    const category: Category = await this.categoryService.create(createCategoryDto);
    return res.status(HttpStatus.CREATED).json(new Response(true, "Category created !", category));
  
  }

  @ApiOperation({ summary: 'Get all categories' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Array<Category> / All categories ' })
  @Get()
  async findAll(@Res() res: any) {
    
    const categories: Array<Category> = await this.categoryService.findAll();
    return res.status(HttpStatus.OK).json(new Response(true, "Ok !", categories));

  }

  @ApiOperation({ summary: 'Get one category by id' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Category / the category just asked' })
  @Get(':id')
  async findOne(@Param('id') id: string, @Res() res: any) {
    
    if (isNaN(+id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    if (! await this.categoryService.findOne(+id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Category ID not found !", null));
    }

    const category: Category = await this.categoryService.findOne(+id);
    return res.status(HttpStatus.OK).json(new Response(true, "Ok !", category));

  }

  @ApiOperation({ summary: 'Update one category by id / Need administrator account' })
  @ApiBody({ type: UpdateCategoryDto })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Category / the category just updated' })
  @UseGuards(JwtAdminAuthGuard)
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCategoryDto: UpdateCategoryDto, @Res() res: any) {
   
    if (isNaN(+id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    if (! await this.categoryService.findOne(+id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Category ID not found !", null));
    }

    if (updateCategoryDto.name && await this.categoryService.findByName(updateCategoryDto.name)) {
      return res.status(HttpStatus.CONFLICT).json(new Response(false, "Name already used !", null));
    }

    const category: Category = await this.categoryService.update(+id, updateCategoryDto);
    return res.status(HttpStatus.OK).json(new Response(true, "Category updated", category));

  }

  @ApiOperation({ summary: 'Delete one category by id / Need administrator account' })
  @ApiResponse({ status: 200, type: Response, description: 'body type: Category / the category just deleted' })
  @UseGuards(JwtAdminAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: string, @Res() res: any) {

    if (isNaN(+id)) {
      return res.status(HttpStatus.BAD_REQUEST).json(new Response(false, "Bad id format !", null));
    }

    if (! await this.categoryService.findOne(+id)) {
      return res.status(HttpStatus.NOT_FOUND).json(new Response(false, "Category ID not found !", null));
    }
    
    const category: Category = await this.categoryService.remove(+id);
    return res.status(HttpStatus.OK).json(new Response(true, "Category deleted", category));

  }
  
}
