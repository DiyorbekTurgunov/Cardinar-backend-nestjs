import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { PaymentMethod, OrderStatus } from '../../../../configs/enums';

export class CreateOrderDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  userId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  branchId: number;

  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  fullName: string;

  @ApiProperty({ example: '+998901234567' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(16)
  phoneNumber: string;

  @ApiProperty({ example: 'john@example.com', required: false })
  @IsOptional()
  @IsEmail()
  @MaxLength(64)
  email?: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  delivery: boolean;

  @ApiProperty({ enum: PaymentMethod, example: PaymentMethod.CASH })
  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @ApiProperty({ enum: OrderStatus, example: OrderStatus.PROCESSING })
  @IsEnum(OrderStatus)
  status: OrderStatus;
}
