import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUserRequestDto } from './dto/create-user-request.dto';
import { UpdateUserRequestDto } from './dto/update-user-request.dto';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(createUserRequestDto: CreateUserRequestDto) {
    return this.usersRepository.create(createUserRequestDto);
  }

  async findById(userId: number) {
    return this.usersRepository.findById(userId);
  }

  async update(userId: number, updateUserRequestDto: UpdateUserRequestDto) {
    return this.usersRepository.update(userId, updateUserRequestDto);
  }

  async delete(userId: number) {
    return this.usersRepository.delete(userId);
  }
}
