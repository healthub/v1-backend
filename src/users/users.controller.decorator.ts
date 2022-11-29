import { applyDecorators, Controller, Get, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

export const UsersController = () =>
  applyDecorators(
    Controller({ path: '/users', version: ['1'] }),
    ApiTags('Users API'),
  );

export const CreateUser = () =>
  applyDecorators(
    Post('/'),
    ApiOperation({
      summary: 'Register API',
    }),
  );

export const GetAllUsers = () =>
  applyDecorators(
    Get('/'),
    ApiOperation({
      summary: 'Get All Users API',
    }),
  );

export const GetUserById = () =>
  applyDecorators(
    Get('/:id'),
    ApiOperation({
      summary: 'Get User By Id API',
    }),
  );

export const UpdateUser = () =>
  applyDecorators(
    Put('/:id'),
    ApiOperation({
      summary: 'Update User Account API',
    }),
  );

export const DeletUser = () =>
  applyDecorators(
    Put('/:id'),
    ApiOperation({
      summary: 'Delete User Account API',
    }),
  );
