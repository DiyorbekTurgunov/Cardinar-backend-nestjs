import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BaseModel } from '../../../core/base-model';

export class ListMaterialDto extends BaseModel {
  @ApiProperty()
  @Expose()
  title: string;

  @ApiProperty()
  @Expose()
  description: string | null;
}
