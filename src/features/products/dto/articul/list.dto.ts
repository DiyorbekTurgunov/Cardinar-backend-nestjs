import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BaseModel } from '../../../../core/base-model';

export class ListArticulDto extends BaseModel {
  @ApiProperty()
  @Expose()
  productId: number;

  @ApiProperty()
  @Expose()
  carModelId: number;
}
