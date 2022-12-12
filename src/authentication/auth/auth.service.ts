import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Users } from '@prisma/client';

import { UsersService } from '../../users/users.service';
import { LoginUserRequestDto } from './dto/login-user-request.dto';
import { LoginUserResponseDto } from './dto/login-user-response.dto';
import { AccessTokenService } from '../token/access-token.service';
import { Crypto } from '@app/utils/crypto';
import { AuthError } from './error';
import { CreateUserRequestDto } from '../../users/dto/create-user-request.dto';
import { PrismaService } from '@app/prisma';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly accessTokenService: AccessTokenService,
  ) {}

  async register({ email, password }: CreateUserRequestDto): Promise<void> {
    try {
      const hashedPassword = await Crypto.encrypt(password);
      await this.usersService.create({
        email,
        password: hashedPassword,
      });
    } catch (error) {
      if (PrismaService.isPrismaError(error)) {
        throw new ConflictException(AuthError.DUPLICATE_EMAIL);
      }
      throw new InternalServerErrorException(error);
    }
  }

  private async getUserWithValidate(
    email: string,
    password: string,
  ): Promise<Users> {
    const user = await this.usersService.getUserByEmailWithValidate(email);

    const isSamePassword = await Crypto.isMatch(password, user.password);
    if (!isSamePassword) {
      throw new BadRequestException(AuthError.IS_NOT_MATCH_PASSWORD);
    }

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
