import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from '@app/prisma';
import { AuthenticationModule } from './authentication/authentication.module';
import { JwtModule } from '@app/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`environments/.${process.env.NODE_ENV}.env`],
      isGlobal: true,
    }),
    UsersModule,
    PrismaModule,
    AuthenticationModule,
    JwtModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
