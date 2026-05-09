import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEmail, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'John Doe' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  fullName: string;

  @ApiProperty({ example: '+998901234567' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(16)
  phoneNumber: string;

  @ApiProperty({ example: 'john@example.com' })
  @IsEmail()
  @MaxLength(64)
  email: string;

  @ApiProperty({ example: 'password123' })
  @IsString()
  @MinLength(6)
  @MaxLength(128)
  password: string;

  @ApiProperty({ example: false, required: false })
  @IsOptional()
  @IsBoolean()
  isAdmin?: boolean;
}
