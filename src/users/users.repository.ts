import { PrismaService } from '@app/prisma';
import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.UsersUncheckedCreateInput) {
    return this.prisma.users.create({ data });
  }

  findById(id: number) {
    return this.prisma.users.findUnique({ where: { id } });
  }

  findOne(email: string) {
    return this.prisma.users.findUnique({ where: { email } });
  }

  update(userId: number, userUpdateInput: Prisma.UsersUpdateInput) {
    return this.prisma.users.update({
      where: { id: userId },
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
