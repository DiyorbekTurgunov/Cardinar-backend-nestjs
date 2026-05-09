import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'John Doe' })
  @IsOptional()
  @IsString()
  @MaxLength(64)
  fullName?: string;

  @ApiProperty({ example: '+998901234567' })
  @IsOptional()
  @IsString()
  @MaxLength(16)
  phoneNumber?: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsOptional()
  @IsEmail()
  @MaxLength(64)
  email?: string;

  @ApiProperty({ example: 'newpassword123' })
  @IsOptional()
  @IsString()
  @MinLength(6)
  @MaxLength(128)
  password?: string;

  @ApiProperty({ example: false })
  @IsOptional()
  @IsBoolean()
  isAdmin?: boolean;
}
