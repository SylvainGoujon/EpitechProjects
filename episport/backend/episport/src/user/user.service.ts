import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User|undefined> {
    await this.userRepository.save(createUserDto);
    return await this.userRepository.findOne({username: createUserDto.username}, {select: ['id', 'username', 'email', 'is_admin']});
  }

  async findAll(): Promise<Array<User>> {
    return await this.userRepository.find({select: ['id', 'username', 'email', 'is_admin']});
  }

  async findOne(id: number): Promise<User|undefined> {
    return await this.userRepository.findOne(id, {select: ['id', 'username', 'email', 'is_admin']});
  }

  async findByEmail(email: string): Promise<User|undefined> {
    return await this.userRepository.findOne({email: email});
  }

  async findByUsername(username: string): Promise<User|undefined> {
    return await this.userRepository.findOne({username: username});
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User|undefined> {
    const user: DeepPartial<User> = updateUserDto
    user.id = id;
    await this.userRepository.save(user);
    return await this.userRepository.findOne(id, {select: ['id', 'username', 'email', 'is_admin']});
  }

  async remove(id: number): Promise<User|undefined> {
    const user: User|undefined = await this.userRepository.findOne(id, {select: ['id', 'username', 'email', 'is_admin']});
    await this.userRepository.delete(id);
    return user;
  }
  
}
