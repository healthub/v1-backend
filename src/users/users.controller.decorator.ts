import { applyDecorators, Controller, Get, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

export const UsersController = () =>
  applyDecorators(
    Controller({ path: '/users', version: ['1'] }),
    ApiTags('Users'),
  );

export const CreateUser = () =>
  applyDecorators(
    Post('/'),
    ApiOperation({
      summary: '유저 생성 API',
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
    ApiOperation({
      summary: '유저 업데이트 API',
    }),
  );

export const DeleteUser = () =>
  applyDecorators(
    Put('/:id'),
    ApiOperation({
      summary: '유저 삭제 API',
    }),
  );
