import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BaseModel } from '../../../core/base-model';

export class ListColorDto extends BaseModel {
  @ApiProperty()
  @Expose()
  title: string;

  @ApiProperty()
  @Expose()
  color: string;
}
