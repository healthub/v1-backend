import { PrismaService } from '@app/prisma';
import { Prisma } from '@prisma/client';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RepositoryRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.RepositoryUncheckedCreateInput) {
    return this.prisma.repository.create({ data });
  }

  findByRepoId(id: number) {
    return this.prisma.repository.findUnique({ where: { id } });
  }

  update(id: number, data: Prisma.RepositoryUncheckedUpdateInput) {
    return this.prisma.repository.update({
      where: { id },
      data,
    });
  }
}
