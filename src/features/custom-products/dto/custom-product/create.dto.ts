import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Category } from '../../../../configs/enums';

export class CreateCustomProductDto {
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

  @ApiProperty({ example: 1 })
  @IsInt()
  carMakeId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  carModelId: number;

  @ApiProperty({ enum: Category, example: Category.COVER })
  @IsEnum(Category)
  category: Category;

  @ApiProperty({ example: 1 })
  @IsInt()
  modelId: number;

  @ApiProperty({ example: true })
  @IsBoolean()
  withLogo: boolean;

  @ApiProperty({ example: 'https://example.com/image.png' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  image: string;
}
