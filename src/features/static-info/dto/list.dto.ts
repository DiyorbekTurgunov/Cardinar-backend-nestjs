import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

// StaticInfo does not extend BaseModel, it has its own id only
export class ListStaticInfoDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  address: string;

  @ApiProperty()
  @Expose()
  phoneNumber: string;

  @ApiProperty()
  @Expose()
  workingHours: string;

  @ApiProperty()
  @Expose()
  email: string;
}
