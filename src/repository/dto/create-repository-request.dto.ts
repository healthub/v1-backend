import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateRepositoryRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly repoName: string;

  @ApiProperty()
  readonly repoExplan: string;
}
