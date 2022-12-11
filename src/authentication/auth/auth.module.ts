import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersModule } from '../../users/users.module';
import { TokenModule } from '../token/token.module';

@Module({
  imports: [TokenModule, UsersModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
