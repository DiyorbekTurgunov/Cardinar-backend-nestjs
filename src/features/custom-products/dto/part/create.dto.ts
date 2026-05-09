import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';
import { Category, Part } from '../../../../configs/enums';

export class CreatePartDto {
  @ApiProperty({ enum: Category, example: Category.COVER })
  @IsEnum(Category)
  category: Category;

  @ApiProperty({ enum: Part, example: Part.CENTRAL })
  @IsEnum(Part)
  part: Part;

  @ApiProperty({ example: 'Front Central Part', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(128)
  title?: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  materialId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  colorId: number;

  @ApiProperty({ example: 'https://example.com/image.png' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  image: string;
}
