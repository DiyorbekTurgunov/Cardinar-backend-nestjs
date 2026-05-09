import { ApiProperty } from '@nestjs/swagger';
import { IsInt } from 'class-validator';

export class CreateProductColorDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  productId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  colorId: number;
}
