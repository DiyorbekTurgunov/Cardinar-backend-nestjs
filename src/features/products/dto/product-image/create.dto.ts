import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, MaxLength, Min } from 'class-validator';

export class CreateProductImageDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  productId: number;

  @ApiProperty({ example: 'https://example.com/image.png' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  image: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  @Min(0)
  position: number;
}
