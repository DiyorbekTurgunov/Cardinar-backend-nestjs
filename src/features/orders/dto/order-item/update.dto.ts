import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsOptional, Min } from 'class-validator';

export class UpdateOrderItemDto {
  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  orderId?: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  productId?: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  articulId?: number;

  @ApiProperty({ example: 2 })
  @IsOptional()
  @IsInt()
  @Min(1)
  quantity?: number;
}
