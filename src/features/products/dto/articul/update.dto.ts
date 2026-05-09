import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional } from 'class-validator';

export class UpdateArticulDto {
  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  productId?: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  carModelId?: number;
}
