import { applyDecorators, Controller, Get, Post } from "@nestjs/common";
import { ApiOperation, ApiTags } from '@nestjs/swagger';

export const UserProfileController = () =>
  applyDecorators(
    Controller({ path: '/user-profile', version: ['1'] }),
    ApiTags('UserProfile'),
  );

export const CreateUserProfile = () =>
  applyDecorators(
    Post('/'),
    ApiOperation({
      summary: '유저 프로필 생성 API',
    }),
  );

export const FindById = () =>
  applyDecorators(
    Get('/:id'),
    ApiOperation({
      summary: '유저 프로필 찾기 API',
    }),
  );
