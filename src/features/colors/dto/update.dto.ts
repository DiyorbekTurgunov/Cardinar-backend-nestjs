import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateColorDto {
  @ApiProperty({ example: 'Red' })
  @IsOptional()
  @IsString()
  @MaxLength(64)
  title?: string;

  @ApiProperty({ example: '#FF0000' })
  @IsOptional()
  @IsString()
  @MaxLength(12)
  color?: string;
}
