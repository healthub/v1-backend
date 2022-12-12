import {
  AuthController as Controller,
  Login,
  Register,
} from './auth.controller.decoratro';
import { AuthService } from './auth.service';
import { Body } from '@nestjs/common';
import { CreateUserRequestDto } from '../../users/dto/create-user-request.dto';
import { LoginUserRequestDto } from './dto/login-user-request.dto';
import { LoginUserResponseDto } from './dto/login-user-response.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Register()
  async register(@Body() createUserRequestDto: CreateUserRequestDto) {
    await this.authService.register(createUserRequestDto);
  }

  @Login()
  async login(@Body() loginUserRequestDto: LoginUserRequestDto) {
    const result = await this.authService.login(loginUserRequestDto);

    return new LoginUserResponseDto(result);
  }
}
