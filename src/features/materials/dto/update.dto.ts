import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateMaterialDto {
  @ApiProperty({ example: 'Leather' })
  @IsOptional()
  @IsString()
  @MaxLength(64)
  title?: string;

  @ApiProperty({ example: 'High quality leather material', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(512)
  description?: string;
}
