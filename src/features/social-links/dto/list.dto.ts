import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { BaseModel } from '../../../core/base-model';

export class ListSocialLinkDto extends BaseModel {
  @ApiProperty()
  @Expose()
  title: string;

  @ApiProperty()
  @Expose()
  link: string;

  @ApiProperty()
  @Expose()
  icon: string;
}
