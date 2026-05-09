import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateCarMakeDto {
  @ApiProperty({ example: 'Toyota' })
  @IsOptional()
  @IsString()
  @MaxLength(64)
  title?: string;
}
