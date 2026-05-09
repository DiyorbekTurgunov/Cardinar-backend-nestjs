import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BaseModel } from '../../../../core/base-model';

export class ListProductImageDto extends BaseModel {
  @ApiProperty()
  @Expose()
  productId: number;

  @ApiProperty()
  @Expose()
  image: string;

  @ApiProperty()
  @Expose()
  position: number;
}
