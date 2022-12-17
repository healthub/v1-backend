import { applyDecorators, Controller, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuth } from '@app/utils/guards';

export const RepositoryController = () =>
  applyDecorators(
    Controller({ path: '/repository', version: ['1'] }),
    ApiTags('Repository'),
  );

export const CreateRepo = () =>
  applyDecorators(
    Post('/'),
    JwtAuth(),
    ApiOperation({
      summary: '레포지토리 생성 API',
    }),
  );

export const UpdateRepo = () =>
  applyDecorators(
    Put('/:repoId'),
    JwtAuth(),
    ApiOperation({
      summary: '레포지토리 생성 API',
    }),
  );
