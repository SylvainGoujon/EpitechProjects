import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';

@Injectable()
export class CategoryService {

  constructor(
    @InjectRepository(Category)
    private categoryRepository: Repository<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category|undefined> {
    await this.categoryRepository.save(createCategoryDto);
    return await this.categoryRepository.findOne({name: createCategoryDto.name});
  }

  async findAll(): Promise<Array<Category>> {
    return await this.categoryRepository.find();
  }

  async findOne(id: number): Promise<Category|undefined> {
    return await this.categoryRepository.findOne(id);
  }

  async findByName(name: string): Promise<Category|undefined> {
    return await this.categoryRepository.findOne({name: name});
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto): Promise<Category|undefined> {
    const category: DeepPartial<Category> = updateCategoryDto
    category.id = id;
    await this.categoryRepository.save(category);
    return await this.categoryRepository.findOne(id);
  }

  async remove(id: number): Promise<Category|undefined> {
    const category: Category|undefined = await this.categoryRepository.findOne(id);
    await this.categoryRepository.delete(id);
    return category;
  }

}
