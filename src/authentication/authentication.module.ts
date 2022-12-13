import { Module } from '@nestjs/common';

import { TokenModule } from './token/token.module';
import { AuthModule } from './auth/auth.module';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [AuthModule, TokenModule],
  providers: [JwtStrategy],
})
export class AuthenticationModule {}
