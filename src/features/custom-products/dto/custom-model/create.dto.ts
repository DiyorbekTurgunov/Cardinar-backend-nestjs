import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Category } from '../../../../configs/enums';

export class CreateCustomModelDto {
  @ApiProperty({ enum: Category, example: Category.COVER })
  @IsEnum(Category)
  category: Category;

  @ApiProperty({ example: 'Sport Cover Model' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  title: string;

  @ApiProperty({ example: 'https://example.com/image.png' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(256)
  image: string;
}
