import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BaseModel } from '../../../../core/base-model';

export class ListCarModelDto extends BaseModel {
  @ApiProperty()
  @Expose()
  carMakeId: number;

  @ApiProperty()
  @Expose()
  title: string;
}
