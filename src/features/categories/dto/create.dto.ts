import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty({ example: 'Car Covers' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  title: string;
}
