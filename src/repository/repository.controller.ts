import { RepositoryService } from './repository.service';
import { CreateRepositoryRequestDto } from './dto/create-repository-request.dto';
import {
  RepositoryController as Controller,
  CreateRepo,
  UpdateRepo,
} from './repository.controller.decorator';
import { Body, Param } from '@nestjs/common';
import { User } from '@app/utils/users.decorator';
import { UserRequestDto } from '../shared/dto/user-request.dto';
import {
  UpdateRepositoryParamDto,
  UpdateRepositoryRequestDto,
} from './dto/update-repository-request.dto';

@Controller()
export class RepositoryController {
  constructor(private readonly repositoryService: RepositoryService) {}

  @CreateRepo()
  async create(
    @User() { userId }: UserRequestDto,
    @Body() createDto: CreateRepositoryRequestDto,
  ) {
    await this.repositoryService.create(userId, createDto);

    return null;
  }

  @UpdateRepo()
  async update(
    @Param() updateParamDto: UpdateRepositoryParamDto,
    @User() { userId }: UserRequestDto,
    @Body() updateDto: UpdateRepositoryRequestDto,
  ) {
    return this.repositoryService.update(
      +updateParamDto.repoId,
      userId,
      updateDto,
    );
  }
}
