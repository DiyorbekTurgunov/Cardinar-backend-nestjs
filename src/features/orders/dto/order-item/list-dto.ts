import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BaseModel } from '../../../../core/base-model';

export class ListOrderItemDto extends BaseModel {
  @ApiProperty()
  @Expose()
  orderId: number;

  @ApiProperty()
  @Expose()
  productId: number;

  @ApiProperty()
  @Expose()
  articulId: number;

  @ApiProperty()
  @Expose()
  quantity: number;
}
