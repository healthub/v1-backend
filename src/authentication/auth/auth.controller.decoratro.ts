import { applyDecorators, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginUserResponseDto } from './dto/login-user-response.dto';

export const AuthController = () =>
  applyDecorators(
    Controller({ path: '/auth', version: ['2'] }),
    ApiTags('Auth'),
  );

export const Register = () =>
  applyDecorators(
    Post('/register'),
    ApiOperation({
      summary: '회원 가입 API',
    }),
    ApiCreatedResponse({
      schema: {},
    }),
  );

export const Login = () =>
  applyDecorators(
    Post('/login'),
    ApiOperation({
      summary: '로그인 API',
    }),
    ApiCreatedResponse({
      type: LoginUserResponseDto,
    }),
  );
