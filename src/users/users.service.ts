import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { UpdateUserRequestDto } from './dto/update-user-request.dto';
import { Prisma, Users } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async create(data: Prisma.UsersUncheckedCreateInput) {
    return this.usersRepository.create(data);
  }

  async findById(id: number) {
    return this.usersRepository.findById(id);
  }

  async update(userId: number, updateUserRequestDto: UpdateUserRequestDto) {
    return this.usersRepository.update(userId, updateUserRequestDto);
  }

  async delete(userId: number) {
    return this.usersRepository.delete(userId);
  }

  async getUserByEmailWithValidate(email: string): Promise<Users> {
    const user = await this.usersRepository.findOne(email);

    if (!user || !user.status) {
      throw new NotFoundException('존재하지 않는 유저입니다.');
    }

    return user;
  }
}
