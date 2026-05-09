import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';
import { Category, Part } from '../../../../configs/enums';

export class UpdatePartDto {
  @ApiProperty({ enum: Category, example: Category.COVER })
  @IsOptional()
  @IsEnum(Category)
  category?: Category;

  @ApiProperty({ enum: Part, example: Part.CENTRAL })
  @IsOptional()
  @IsEnum(Part)
  part?: Part;

  @ApiProperty({ example: 'Front Central Part', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(128)
  title?: string;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  materialId?: number;

  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsInt()
  colorId?: number;

  @ApiProperty({ example: 'https://example.com/image.png' })
  @IsOptional()
  @IsString()
  @MaxLength(256)
  image?: string;
}
