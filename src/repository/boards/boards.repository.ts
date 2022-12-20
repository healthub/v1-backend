import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class BoardsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.BoardsUncheckedCreateInput) {
    return this.prisma.boards.create({ data });
  }

  findBoards(id: number) {
    return this.prisma.boards.findMany({ where: { userId: id } });
  }
}
