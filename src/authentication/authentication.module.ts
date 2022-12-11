import { Module } from '@nestjs/common';

import { TokenModule } from './token/token.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [AuthModule, TokenModule],
})
export class AuthenticationModule {}
