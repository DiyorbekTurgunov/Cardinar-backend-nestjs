import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BaseModel } from '../../../core/base-model';

export class ListRequestDto extends BaseModel {
  @ApiProperty()
  @Expose()
  userId: number | null;

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
  comments: string | null;
}
