import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsEnum, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { Category } from '../../../../configs/enums';

export class UpdateCustomProductDto {
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

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  carMakeId?: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  carModelId?: number;

  @ApiProperty({ enum: Category, example: Category.COVER })
  @IsOptional()
  @IsEnum(Category)
  category?: Category;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  modelId?: number;

  @ApiProperty({ example: true })
  @IsOptional()
  @IsBoolean()
  withLogo?: boolean;

  @ApiProperty({ example: 'https://example.com/image.png' })
  @IsOptional()
  @IsString()
  @MaxLength(256)
  image?: string;

  @ApiProperty({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
