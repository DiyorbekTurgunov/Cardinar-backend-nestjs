import { ApiProperty } from '@nestjs/swagger';
import { IsInt, Min } from 'class-validator';

export class CreateOrderItemDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  orderId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  productId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  articulId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  @Min(1)
  quantity: number;
}
