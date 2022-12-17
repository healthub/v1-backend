import { CreateRepositoryRequestDto } from './create-repository-request.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateRepositoryRequestDto extends CreateRepositoryRequestDto {}

export class UpdateRepositoryParamDto {
  @ApiProperty()
  @Type(() => Number)
  @IsNumber()
  @IsNotEmpty()
  readonly repoId: number;
}
