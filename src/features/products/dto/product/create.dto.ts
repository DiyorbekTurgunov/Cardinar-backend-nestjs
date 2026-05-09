import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDecimal, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Status } from '../../../../configs/enums';

export class CreateProductDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  categoryId: number;

  @ApiProperty({ example: 'Premium Car Cover' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  title: string;

  @ApiProperty({ example: 150000.00 })
  @IsDecimal({ decimal_digits: '2' })
  price: number;

  @ApiProperty({ example: 'High quality car cover with waterproof material', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ enum: Status, example: Status.NEW, required: false })
  @IsOptional()
  @IsEnum(Status)
  status?: Status;

  @ApiProperty({ example: false, required: false })
  @IsOptional()
  @IsBoolean()
  isPremium?: boolean;
}
