import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { Category } from '../../../../configs/enums';
import { BaseModel } from '../../../../core/base-model';

export class ListCustomModelDto extends BaseModel {
  @ApiProperty({ enum: Category })
  @Expose()
  category: Category;

  @ApiProperty()
  @Expose()
  title: string;

  @ApiProperty()
  @Expose()
  image: string;
}
