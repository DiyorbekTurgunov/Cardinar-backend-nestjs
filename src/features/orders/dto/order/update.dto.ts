import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsEnum, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { PaymentMethod, OrderStatus } from '../../../../configs/enums';

export class UpdateOrderDto {
  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  userId?: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  branchId?: number;

  @ApiProperty({ example: 'John Doe' })
  @IsOptional()
  @IsString()
  @MaxLength(64)
  fullName?: string;

  @ApiProperty({ example: '+998901234567' })
  @IsOptional()
  @IsString()
  @MaxLength(16)
  phoneNumber?: string;

  @ApiProperty({ example: 'john@example.com', required: false })
  @IsOptional()
  @IsEmail()
  @MaxLength(64)
  email?: string;

  @ApiProperty({ example: true })
  @IsOptional()
  @IsBoolean()
  delivery?: boolean;

  @ApiProperty({ enum: PaymentMethod, example: PaymentMethod.CASH })
  @IsOptional()
  @IsEnum(PaymentMethod)
  paymentMethod?: PaymentMethod;

  @ApiProperty({ enum: OrderStatus, example: OrderStatus.PROCESSING })
  @IsOptional()
  @IsEnum(OrderStatus)
  status?: OrderStatus;
}
