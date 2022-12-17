import {
  CreateUserProfile,
  UpdateUserProfile,
  UserProfileController as Controller,
} from './user-profile.controller.decorator';
import { UserProfileService } from './user-profile.service';
import { Body } from '@nestjs/common';
import { CreateUserProfileRequestDto } from './dto/create-user-profile-request.dto';
import { UserRequestDto } from '../../shared/dto/user-request.dto';
import { User } from '@app/utils/users.decorator';
import { UpdateUserProfileRequestDto } from './dto/update-user-profile-request.dto';

@Controller()
export class UserProfileController {
  constructor(private readonly userProfileService: UserProfileService) {}

  @CreateUserProfile()
  async createProfile(
    @User() { userId }: UserRequestDto,
    @Body() defaultProfileData: CreateUserProfileRequestDto,
  ) {
    await this.userProfileService.createProfile(userId, defaultProfileData);

    return null;
  }

  @UpdateUserProfile()
  async update(
    @User() { userId }: UserRequestDto,
    @Body() updateUserProfileDto: UpdateUserProfileRequestDto,
  ) {
    return this.userProfileService.update(userId, updateUserProfileDto);
  }
}
