import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserProfileRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(userProfileCreateInput: Prisma.UserProfileUncheckedCreateInput) {
    return this.prisma.userProfile.create({ data: userProfileCreateInput });
  }
}
