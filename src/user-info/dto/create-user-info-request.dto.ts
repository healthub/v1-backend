import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateUserInfoRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsInt()
  readonly bigThree: number;
}
