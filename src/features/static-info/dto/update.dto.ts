import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateStaticInfoDto {
  @ApiProperty({ example: 'Toshkent, Chilonzor tumani' })
  @IsOptional()
  @IsString()
  @MaxLength(128)
  address?: string;

  @ApiProperty({ example: '+998901234567' })
  @IsOptional()
  @IsString()
  @MaxLength(16)
  phoneNumber?: string;

  @ApiProperty({ example: 'Mon-Sat: 9:00 - 18:00' })
  @IsOptional()
  @IsString()
  @MaxLength(128)
  workingHours?: string;

  @ApiProperty({ example: 'info@example.com' })
  @IsOptional()
  @IsEmail()
  @MaxLength(64)
  email?: string;
}
