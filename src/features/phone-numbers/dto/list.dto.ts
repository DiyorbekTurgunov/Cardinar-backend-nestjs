import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BaseModel } from '../../../core/base-model';

export class ListPhoneNumberDto extends BaseModel {
  @ApiProperty()
  @Expose()
  phoneNumber: string;
}
