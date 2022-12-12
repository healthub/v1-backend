import { applyDecorators, Controller, Delete, Get, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuth } from '@app/utils/guards/jwt-auth.guard';

export const UsersController = () =>
  applyDecorators(
    Controller({ path: '/users', version: ['1'] }),
    ApiTags('Users'),
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
