import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBoardsRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly contents: string;

  @ApiProperty()
  readonly ImageUrl: string;
}

export class CreateBoardsParamDto {
  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  readonly repoId: number;
}
