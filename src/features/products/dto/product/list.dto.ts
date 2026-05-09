import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { Status } from '../../../../configs/enums';
import { BaseModel } from '../../../../core/base-model';

export class ListProductDto extends BaseModel {
  @ApiProperty()
  @Expose()
  categoryId: number;

  @ApiProperty()
  @Expose()
  title: string;

  @ApiProperty()
  @Expose()
  price: number;

  @ApiProperty()
  @Expose()
  description: string | null;

  @ApiProperty({ enum: Status })
  @Expose()
  status: Status | null;

  @ApiProperty()
  @Expose()
  isPremium: boolean;
}
