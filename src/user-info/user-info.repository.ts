import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserInfoRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(userInfoCreateInput: Prisma.UserInfoCreateInput) {
    return this.prisma.userInfo.create({ data: userInfoCreateInput });
  }

  findAllUserId() {
    return this.prisma.userInfo.findMany();
  }

  findByUserInfoId(id: number) {
    return this.prisma.userInfo.findUnique({ where: { id } });
  }

  update(id: number, userInfoUpdateInput: Prisma.UserInfoUpdateInput) {
    return this.prisma.userInfo.update({
      where: { id },
      data: userInfoUpdateInput,
    });
  }

  delete(id: number) {
    return this.prisma.userInfo.update({
      where: { id },
      data: {
        status: false,
      },
    });
  }
}
