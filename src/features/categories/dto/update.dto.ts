import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateCategoryDto {
  @ApiProperty({ example: 'Car Covers' })
  @IsOptional()
  @IsString()
  @MaxLength(128)
  title?: string;
}
