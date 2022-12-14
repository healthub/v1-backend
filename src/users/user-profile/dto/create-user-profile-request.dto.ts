import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserProfileRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly userName: '이름을 설정해 주세요.';

  @ApiProperty()
  readonly bio: '간략한 자신의 소개를 해봐요 :)';

  @ApiProperty()
  readonly mainClub: '자주 다니는 헬스장을 공유해 보아요.';

  @ApiProperty()
  readonly instaAccount: '인스타그램 계정을 작성하세요!';

  @ApiProperty()
  readonly profileImageUrl: '프로필 사진을 등록해 보아요';
}
