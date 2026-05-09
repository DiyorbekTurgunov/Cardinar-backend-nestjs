import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString, MaxLength } from 'class-validator';
import { Category } from '../../../../configs/enums';

export class UpdateCustomModelDto {
  @ApiProperty({ enum: Category, example: Category.COVER })
  @IsOptional()
  @IsEnum(Category)
  category?: Category;

  @ApiProperty({ example: 'Sport Cover Model' })
  @IsOptional()
  @IsString()
  @MaxLength(128)
  title?: string;

  @ApiProperty({ example: 'https://example.com/image.png' })
  @IsOptional()
  @IsString()
  @MaxLength(256)
  image?: string;
}
