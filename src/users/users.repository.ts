import { PrismaService } from '@app/prisma';
import { Prisma } from '@prisma/client';

export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(usersCreateInput: Prisma.UsersCreateInput) {
    console.log(usersCreateInput);
    return this.prisma.users.create({ data: usersCreateInput });
  }

  findMany() {
    return this.prisma.users.findMany();
  }

  findUnique(id: number) {
    return this.prisma.users.findUnique({ where: { id } });
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
