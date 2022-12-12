import { PrismaService } from '@app/prisma';
import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';
import { LoginUserRequestDto } from '../authentication/auth/dto/login-user-request.dto';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.UsersUncheckedCreateInput) {
    return this.prisma.users.create({ data });
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
