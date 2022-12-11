import {
  CreateUserProfile,
  FindById,
  UserProfileController as Controller,
} from './user-profile.controller.decorator';
import { UserProfileService } from './user-profile.service';
import { Body, Param } from '@nestjs/common';
import { CreateUserProfileRequestDto } from './dto/create-user-profile-request.dto';
import { UserRequestDto } from '../../shared/dto/user-request.dto';
import { User } from '@app/utils/users.decorator';

@Controller()
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @CreateUserProfile()
  async create(
    @User() { userId }: UserRequestDto,
    @Body() createUserProfileDto: CreateUserProfileRequestDto,
  ) {
    await this.userProfileService.create(userId, createUserProfileDto);

    return null;
  }
}
