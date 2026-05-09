import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BaseModel } from '../../../core/base-model';

export class ListBannerDto extends BaseModel {
  @ApiProperty()
  @Expose()
  title: string;

  @ApiProperty()
  @Expose()
  image: string;

  @ApiProperty()
  @Expose()
  isActive: boolean;
}
