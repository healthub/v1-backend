import {
  BoardsController as Controller,
  CreateBoards,
  GetBoards,
} from './boards.constroller.decorator';
import { Body } from '@nestjs/common';
import { User } from '@app/utils/users.decorator';
import { CreateBoardsRequestDto } from './dto/create-boards-request.dto';
import { UserRequestDto } from '../../shared/dto/user-request.dto';
import { BoardsService } from './boards.service';

@Controller()
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @CreateBoards()
  async create(
    @User() { userId }: UserRequestDto,
    @Body() createDto: CreateBoardsRequestDto,
  ) {
    await this.boardsService.create(userId, createDto);

    return null;
  }

  @GetBoards()
  async findBoards(@User() { userId }: UserRequestDto) {
    return this.boardsService.findBoards(userId);
  }
}
