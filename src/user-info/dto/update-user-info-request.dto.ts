import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class UpdateUserInfoRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  readonly bigThree: number;
}
