import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(userProfileCreateInput: Prisma.UserProfileUncheckedCreateInput) {
    return this.prisma.userProfile.create({ data: userProfileCreateInput });
  }

  findByUserId(userId: number) {
    return this.prisma.userProfile.findUnique({ where: { userId } });
  }

  update(id: number, userProfileUpdateInput: Prisma.UserProfileUpdateInput) {
    return this.prisma.userProfile.update({
      where: { id },
      data: userProfileUpdateInput,
    });
  }
}
