import {
  CreateUser,
  DeletUser,
  GetUserById,
  UpdateUser,
  UsersController as Controller,
} from './users.controller.decorator';
import { UsersService } from './users.service';
import { CreateUserRequestDto } from './dto/create-user-request.dto';
import { Body, Param } from '@nestjs/common';
import { UpdateUserRequestDto } from './dto/update-user-request.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @CreateUser()
  async create(@Body() createUserRequestDto: CreateUserRequestDto) {
    return this.usersService.create(createUserRequestDto);
  }

  @GetUserById()
  async findById(@Param('id') userId: string) {
    return this.usersService.findById(+userId);
  }

  @UpdateUser()
  async update(
    @Param('id') userId: string,
    updateUserRequestDto: UpdateUserRequestDto,
  ) {
    return this.usersService.update(+userId, updateUserRequestDto);
  }

  @DeletUser()
  async delete(@Param('id') userId: string) {
    return this.usersService.delete(+userId);
  }
}
