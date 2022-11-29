import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from '@app/prisma';
import { UserInfoModule } from './user-info/user-info.module';
@Module({
  imports: [UsersModule, PrismaModule, UserInfoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
