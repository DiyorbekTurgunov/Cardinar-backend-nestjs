import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateCarModelDto {
  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  carMakeId?: number;

  @ApiProperty({ example: 'Camry' })
  @IsOptional()
  @IsString()
  @MaxLength(64)
  title?: string;
}
