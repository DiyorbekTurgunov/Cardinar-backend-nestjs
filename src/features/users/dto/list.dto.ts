import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BaseModel } from '../../../core/base-model';

export class ListUserDto extends BaseModel {
  @ApiProperty()
  @Expose()
  fullName: string;

  @ApiProperty()
  @Expose()
  phoneNumber: string;

  @ApiProperty()
  @Expose()
  email: string;

  @ApiProperty()
  @Expose()
  isAdmin: boolean;
}
