import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreatePhoneNumberDto {
  @ApiProperty({ example: '+998901234567' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(16)
  phoneNumber: string;
}
