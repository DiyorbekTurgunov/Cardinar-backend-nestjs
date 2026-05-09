import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateMaterialDto {
  @ApiProperty({ example: 'Leather' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  title: string;

  @ApiProperty({ example: 'High quality leather material', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(512)
  description?: string;
}
