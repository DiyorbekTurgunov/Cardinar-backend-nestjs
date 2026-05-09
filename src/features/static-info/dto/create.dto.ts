import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateStaticInfoDto {
  @ApiProperty({ example: 'Toshkent, Chilonzor tumani' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  address: string;

  @ApiProperty({ example: '+998901234567' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(16)
  phoneNumber: string;

  @ApiProperty({ example: 'Mon-Sat: 9:00 - 18:00' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  workingHours: string;

  @ApiProperty({ example: 'info@example.com' })
  @IsEmail()
  @MaxLength(64)
  email: string;
}
