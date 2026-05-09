import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BaseModel } from '../../../../core/base-model';

export class ListProductColorDto extends BaseModel {
  @ApiProperty()
  @Expose()
  productId: number;

  @ApiProperty()
  @Expose()
  colorId: number;
}
