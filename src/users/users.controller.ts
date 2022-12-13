import {
  DeleteUser,
  UpdateUser,
  UsersController as Controller,
} from './users.controller.decorator';
import { UsersService } from './users.service';
import { Body } from '@nestjs/common';
import { UpdateUserRequestDto } from './dto/update-user-request.dto';
import { User } from '@app/utils/users.decorator';
import { UserRequestDto } from '../shared/dto/user-request.dto';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UpdateUser()
  async update(
    @User() { userId }: UserRequestDto,
    @Body() body: UpdateUserRequestDto,
  ) {
    return this.usersService.update(userId, body);
  }

  @DeleteUser()
  async delete(@User() { userId }: UserRequestDto) {
    return this.usersService.delete(userId);
  }
}
