import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from '@app/prisma';
import { AuthenticationModule } from './authentication/authentication.module';
import { JwtModule } from '@app/jwt';
import { ConfigModule } from '@nestjs/config';
import { UserProfileModule } from './users/user-profile/user-profile.module';
import { RepositoryModule } from './repository/repository.module';
import { BoardsModule } from './repository/boards/boards.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`environments/.${process.env.NODE_ENV}.env`],
      isGlobal: true,
    }),
    UsersModule,
    UserProfileModule,
    PrismaModule,
    AuthenticationModule,
    JwtModule,
    RepositoryModule,
    BoardsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
