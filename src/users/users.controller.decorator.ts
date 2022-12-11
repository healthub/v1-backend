import {
  applyDecorators,
  Controller,
  Delete,
  Get,
  Post,
  Put,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginUserResponseDto } from './dto/login-user-response.dto';
import { JwtAuth } from '@app/utils/guards/jwt-auth.guard';

export const UsersController = () =>
  applyDecorators(
    Controller({ path: '/users', version: ['1'] }),
    ApiTags('Users'),
  );

export const CreateUser = () =>
  applyDecorators(
    Post('/register'),
    ApiOperation({
      summary: '유저 생성 API',
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

export const FindById = () =>
  applyDecorators(
    Get('/:id'),
    ApiOperation({
      summary: '유저 찾기 API',
    }),
  );

export const UpdateUser = () =>
  applyDecorators(
    Put('/:id'),
    JwtAuth(),
    ApiOperation({
      summary: '유저 업데이트 API',
    }),
  );

export const DeleteUser = () =>
  applyDecorators(
    Delete('/:id'),
    ApiOperation({
      summary: '유저 삭제 API',
    }),
  );
