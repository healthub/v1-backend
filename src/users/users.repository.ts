import { PrismaService } from '@app/prisma';
import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { LoginUserRequestDto } from './dto/login-user-request.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(usersCreateInput: Prisma.UsersCreateInput) {
    return this.prisma.users.create({ data: usersCreateInput });
  }

  async login(loginUserRequestDto: LoginUserRequestDto) {
    const email = loginUserRequestDto.email;
    const loginOk = await this.findOne(email);

    const password = loginOk.password;

    if (loginOk) {
      if (password === loginUserRequestDto.password) {
        return true;
      }
    }
    return false;
  }

  findMany() {
    return this.prisma.users.findMany();
  }

  findById(id: number) {
    return this.prisma.users.findUnique({ where: { id } });
  }

  findOne(email: string) {
    return this.prisma.users.findUnique({ where: { email } });
  }

  update(id: number, userUpdateInput: Prisma.UsersUpdateInput) {
    return this.prisma.users.update({
      where: { id },
      data: userUpdateInput,
    });
  }

  delete(id: number) {
    return this.prisma.users.update({
      where: { id },
      data: { status: false },
    });
  }
}
