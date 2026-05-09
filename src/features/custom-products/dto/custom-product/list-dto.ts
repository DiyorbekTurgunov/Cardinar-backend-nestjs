import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { Category } from '../../../../configs/enums';
import { BaseModel } from '../../../../core/base-model';

export class ListCustomProductDto extends BaseModel {
  @ApiProperty()
  @Expose()
  fullName: string;

  @ApiProperty()
  @Expose()
  phoneNumber: string;

  @ApiProperty()
  @Expose()
  email: string | null;

  @ApiProperty()
  @Expose()
  carMakeId: number;

  @ApiProperty()
  @Expose()
  carModelId: number;

  @ApiProperty({ enum: Category })
  @Expose()
  category: Category;

  @ApiProperty()
  @Expose()
  modelId: number;

  @ApiProperty()
  @Expose()
  withLogo: boolean;

  @ApiProperty()
  @Expose()
  image: string;

  @ApiProperty()
  @Expose()
  isActive: boolean;
}
