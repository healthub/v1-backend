import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from '@app/prisma';
import { UserInfoModule } from './user-info/user-info.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [UsersModule, PrismaModule, UserInfoModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
