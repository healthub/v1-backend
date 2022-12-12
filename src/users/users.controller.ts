import {
  DeleteUser,
  FindById,
  UpdateUser,
  UsersController as Controller,
} from './users.controller.decorator';
import { UsersService } from './users.service';
import { Body, Param } from '@nestjs/common';
import { UpdateUserRequestDto } from './dto/update-user-request.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

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
