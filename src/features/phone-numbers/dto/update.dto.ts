import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdatePhoneNumberDto {
  @ApiProperty({ example: '+998901234567' })
  @IsOptional()
  @IsString()
  @MaxLength(16)
  phoneNumber?: string;
}
