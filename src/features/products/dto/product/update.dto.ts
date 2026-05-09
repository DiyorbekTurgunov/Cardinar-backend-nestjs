import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDecimal, IsEnum, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { Status } from '../../../../configs/enums';

export class UpdateProductDto {
  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  categoryId?: number;

  @ApiProperty({ example: 'Premium Car Cover' })
  @IsOptional()
  @IsString()
  @MaxLength(128)
  title?: string;

  @ApiProperty({ example: 150000.00 })
  @IsOptional()
  @IsDecimal({ decimal_digits: '2' })
  price?: number;

  @ApiProperty({ example: 'High quality car cover with waterproof material', required: false })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ enum: Status, example: Status.NEW, required: false })
  @IsOptional()
  @IsEnum(Status)
  status?: Status;

  @ApiProperty({ example: false })
  @IsOptional()
  @IsBoolean()
  isPremium?: boolean;
}
