import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateUserProfileRequestDto {
  @ApiProperty()
  readonly profileImageUrl: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly userName: string;

  @ApiProperty()
  readonly bio: string;

  @ApiProperty()
  readonly mainClub: string;

  @ApiProperty()
  readonly instarAccount: string;
}
