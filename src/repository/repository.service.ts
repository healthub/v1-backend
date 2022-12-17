import { RepositoryRepository } from './repository.repository';
import { CreateRepositoryRequestDto } from './dto/create-repository-request.dto';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UpdateRepositoryRequestDto } from './dto/update-repository-request.dto';

@Injectable()
export class RepositoryService {
  constructor(
    private readonly repository: RepositoryRepository,
    private readonly usersService: UsersService,
  ) {}

  async create(id: number, createDto: CreateRepositoryRequestDto) {
    const userId = await this.usersService.findById(id);

    if (!userId) {
      throw new ForbiddenException(
        '존재하지 않는 사용자의 레포지토리를 생성할 수 없습니다.',
      );
    }
    const createData = {
      userId: userId.id,
      repoName: createDto.repoName,
      repoExplan: createDto.repoExplan,
    };
    return this.repository.create(createData);
  }

  async findByRepoId(id: number) {
    return await this.repository.findByRepoId(id);
  }

  async update(
    id: number,
    userId: number,
    updateDto: UpdateRepositoryRequestDto,
  ) {
    const repoId = await this.findByRepoId(id);

    if (userId !== repoId.userId) {
      throw new ForbiddenException('레포지토리의 생성자가 아닙니다.');
    }
    return this.repository.update(id, updateDto);
  }
}
