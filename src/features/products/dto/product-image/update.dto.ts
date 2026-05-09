import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, IsString, MaxLength, Min } from 'class-validator';

export class UpdateProductImageDto {
  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  productId?: number;

  @ApiProperty({ example: 'https://example.com/image.png' })
  @IsOptional()
  @IsString()
  @MaxLength(256)
  image?: string;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  @Min(0)
  position?: number;
}
