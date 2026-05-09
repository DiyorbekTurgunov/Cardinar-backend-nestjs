import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { Category, Part } from '../../../../configs/enums';
import { BaseModel } from '../../../../core/base-model';

export class ListPartDto extends BaseModel {
  @ApiProperty({ enum: Category })
  @Expose()
  category: Category;

  @ApiProperty({ enum: Part })
  @Expose()
  part: Part;

  @ApiProperty()
  @Expose()
  title: string | null;

  @ApiProperty()
  @Expose()
  materialId: number;

  @ApiProperty()
  @Expose()
  colorId: number;

  @ApiProperty()
  @Expose()
  image: string;
}
