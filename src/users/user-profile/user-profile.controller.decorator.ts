import { applyDecorators, Controller, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuth } from '@app/utils/guards/jwt-auth.guard';

export const UserProfileController = () =>
  applyDecorators(
    Controller({ path: '/user-profile', version: ['1'] }),
    ApiTags('UserProfile'),
  );

export const CreateUserProfile = () =>
  applyDecorators(
    Post('/'),
    JwtAuth(),
    ApiOperation({
      summary: '유저 프로필 생성 API',
    }),
  );

export const UpdateUserProfile = () =>
  applyDecorators(
    Put('/'),
    JwtAuth(),
    ApiOperation({
      summary: '유저 프로필 변경 API',
    }),
  );
