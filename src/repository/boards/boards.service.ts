import { ForbiddenException, Injectable } from '@nestjs/common';
import { BoardsRepository } from './boards.repository';
import { CreateBoardsRequestDto } from './dto/create-boards-request.dto';
import { UsersService } from '../../users/users.service';
import { RepositoryService } from '../repository.service';

@Injectable()
export class BoardsService {
  constructor(
    private readonly boardsRepository: BoardsRepository,
    private readonly usersService: UsersService,
    private readonly repositoryService: RepositoryService,
  ) {}

  async create(repoId: number, id: number, createDto: CreateBoardsRequestDto) {
    const userId = await this.usersService.findById(id);
    const repository = await this.repositoryService.findByRepoId(repoId);
    if (!userId || !repository || repository.userId != userId.id) {
      throw new ForbiddenException(
        '존재하지 않는 레포지토리, 사용자에 접근했거나, 해당 레포지토리의 사용자와 일치하지 않습니다.',
      );
    }
    await this.jandiCheck(id);

    const boardsCreateData = {
      userId: userId.id,
      repoId: repository.id,
      ImageUrl: createDto.ImageUrl,
      contents: createDto.contents,
    };

    return this.boardsRepository.create(boardsCreateData);
  }

  async jandiCheck(userId: number) {
    const Day = Date();

    console.log(Day);
  }
}
