import { Injectable } from '@nestjs/common';
import { Users } from '@prisma/client';

import { UsersService } from '../../users/users.service';
import { LoginUserRequestDto } from '../../users/dto/login-user-request.dto';
import { LoginUserResponseDto } from '../../users/dto/login-user-response.dto';
import { AccessTokenService } from '../token/access-token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly accessTokenService: AccessTokenService,
  ) {}

  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(email);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  private async getUserWithValidate(
    email: string,
    password: string,
  ): Promise<Users> {
    const user = await this.usersService.getUserByEmailWithValidate(email);

    return user;
  }

  async login({
    email,
    password,
  }: LoginUserRequestDto): Promise<LoginUserResponseDto> {
    const { id: userId } = await this.getUserWithValidate(email, password);

    return {
      accessToken: this.accessTokenService.generateAccessToken({ userId }),
    };
  }
}
