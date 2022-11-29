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

  async findMany() {
    return this.usersRepository.findMany();
  }

  async findById(userId: number) {
    return this.usersRepository.findUnique(userId);
  }

  async update(id: number, updateUserRequestDto: UpdateUserRequestDto) {
    return this.usersRepository.update(id, updateUserRequestDto);
  }

  async delete(id: number) {
    return this.usersRepository.delete(id);
  }
}
