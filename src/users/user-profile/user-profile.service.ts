import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserProfileRepository } from './user-profile.repository';
import { CreateUserProfileRequestDto } from './dto/create-user-profile-request.dto';
import { UsersService } from '../users.service';
import { UpdateUserProfileRequestDto } from './dto/update-user-profile-request.dto';

@Injectable()
export class UserProfileService {
  constructor(
    private readonly userProfileRepository: UserProfileRepository,
    private readonly usersService: UsersService,
  ) {}

  async create(id: number, createUserProfileDto: CreateUserProfileRequestDto) {
    const userId = await this.usersService.findById(id);

    if (!userId) {
      throw new ForbiddenException(
        '존재하지 않는 사용자의 프로필을 생성할 수 없습니다.',
      );
    }

    const createData = {
      userId: userId.id,
      userName: createUserProfileDto.userName,
      bio: createUserProfileDto.bio,
      mainClub: createUserProfileDto.mainClub,
      instarAccount: createUserProfileDto.instaAccount,
      profileImageUrl: createUserProfileDto.profileImageUrl,
    };

    return this.userProfileRepository.create(createData);
  }

  async findByUserId(userId: number) {
    return this.userProfileRepository.findByUserId(userId);
  }

  async update(
    userId: number,
    updateUserProfileDto: UpdateUserProfileRequestDto,
  ) {
    const updateId = await this.findByUserId(userId);

    if (!updateId && !userId) {
      throw new ForbiddenException(
        '존재하지 않는 사용자 혹은 프로필을 변경할 수 없습니다.',
      );
    }

    return this.userProfileRepository.update(updateId.id, updateUserProfileDto);
  }
}
