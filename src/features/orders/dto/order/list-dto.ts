import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { PaymentMethod, OrderStatus } from '../../../../configs/enums';
import { BaseModel } from '../../../../core/base-model';

export class ListOrderDto extends BaseModel {
  @ApiProperty()
  @Expose()
  userId: number;

  @ApiProperty()
  @Expose()
  branchId: number;

  @ApiProperty()
  @Expose()
  fullName: string;

  @ApiProperty()
  @Expose()
  phoneNumber: string;

  @ApiProperty()
  @Expose()
  email: string | null;

  @ApiProperty()
  @Expose()
  delivery: boolean;

  @ApiProperty({ enum: PaymentMethod })
  @Expose()
  paymentMethod: PaymentMethod;

  @ApiProperty({ enum: OrderStatus })
  @Expose()
  status: OrderStatus;
}
