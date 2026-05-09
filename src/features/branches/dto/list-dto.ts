import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BranchType } from '../../../configs/enums';
import { BaseModel } from '../../../core/base-model';

export class ListBranchesDto extends BaseModel {
  @ApiProperty()
  @Expose()
  title: string;

  @ApiProperty()
  @Expose()
  address: string;

  @ApiProperty()
  @Expose()
  district: string;

  @ApiProperty()
  @Expose()
  region: string;

  @ApiProperty()
  @Expose()
  phoneNumber: string;

  @ApiProperty()
  @Expose()
  longitude: string;

  @ApiProperty()
  @Expose()
  latitude: string;

  @ApiProperty()
  @Expose()
  isActive: boolean;

  @ApiProperty({ enum: BranchType })
  @Expose()
  branchType: BranchType;
}
