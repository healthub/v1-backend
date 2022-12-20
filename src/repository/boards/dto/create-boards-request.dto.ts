import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateBoardsRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly contents: string;

  @ApiProperty()
  readonly ImageUrl: string;
}
