import { applyDecorators, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { JwtAuth } from '@app/utils/guards';

export const BoardsController = () =>
  applyDecorators(
    Controller({ path: '/boards', version: ['1'] }),
    ApiTags('Boards'),
  );

export const CreateBoards = () =>
  applyDecorators(
    Post('/:repoId'),
    JwtAuth(),
    ApiOperation({
      summary: '게시글 생성 API',
    }),
  );
