import { ForbiddenException, Injectable } from '@nestjs/common';
import { UserProfileRepository } from './user-profile.repository';
import { CreateUserProfileRequestDto } from './dto/create-user-profile-request.dto';
import { UsersService } from '../users.service';

@Injectable()
export class UserProfileService {
  constructor(
    private readonly userProfileRepository: UserProfileRepository,
    private readonly usersService: UsersService,
  ) {}

  async create(id: number, createUserProfileDto: CreateUserProfileRequestDto) {
    const userId = await this.usersService.findById(
      createUserProfileDto.userId,
    );

    if (!userId) {
      throw new ForbiddenException(
        '존재하지 않는 사용자의 프로필을 생성할 수 없습니다.',
      );
    }

    const createData = {
      profileImageUrl: createUserProfileDto.profileImageUrl,
      userName: createUserProfileDto.userName,
      bio: createUserProfileDto.bio,
      mainClub: createUserProfileDto.mainClub,
      instarAccount: createUserProfileDto.instarAccount,
      userId,
    };

    return this.userProfileRepository.create(createData);
  }
}
