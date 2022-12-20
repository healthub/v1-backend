import { ForbiddenException, Injectable } from '@nestjs/common';
import { BoardsRepository } from './boards.repository';
import { CreateBoardsRequestDto } from './dto/create-boards-request.dto';
import { UsersService } from '../../users/users.service';

@Injectable()
export class BoardsService {
  constructor(
    private readonly boardsRepository: BoardsRepository,
    private readonly usersService: UsersService,
  ) {}

  async create(id: number, createDto: CreateBoardsRequestDto) {
    const userId = await this.usersService.findById(id);
    if (!userId) {
      throw new ForbiddenException(
        '존재하지 않는 레포지토리, 사용자에 접근했거나, 해당 레포지토리의 사용자와 일치하지 않습니다.',
      );
    }
    const boardsCreateData = {
      userId: userId.id,
      title: createDto.title,
      contents: createDto.contents,
    };

    return this.boardsRepository.create(boardsCreateData);
  }

  async findBoards() {
    const date = new Date();
    const toDay = {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDay(),
    };

    console.log(toDay);
  }
}
