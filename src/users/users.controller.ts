import {
  CreateUser,
  DeleteUser,
  FindById,
  Login,
  UpdateUser,
  UsersController as Controller,
} from './users.controller.decorator';
import { UsersService } from './users.service';
import { Body, Param } from '@nestjs/common';
import { CreateUserRequestDto } from './dto/create-user-request.dto';
import { UpdateUserRequestDto } from './dto/update-user-request.dto';
import { LoginUserRequestDto } from '../authentication/auth/dto/login-user-request.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @CreateUser()
  async create(@Body() createUserRequestDto: CreateUserRequestDto) {
    return this.usersService.create(createUserRequestDto);
  }

  @Login()
  async login(@Body() loginUserRequestDto: LoginUserRequestDto) {
    return this.usersService.login(loginUserRequestDto);
  }

  @FindById()
  async findById(@Param('id') userId: string) {
    return this.usersService.findById(+userId);
  }

  @UpdateUser()
  async update(
    @Param('id') userId: string,
    @Body() body: UpdateUserRequestDto,
  ) {
    return this.usersService.update(+userId, body);
  }

  @DeleteUser()
  async delete(@Param('id') userId: string) {
    return this.usersService.delete(+userId);
  }
}
