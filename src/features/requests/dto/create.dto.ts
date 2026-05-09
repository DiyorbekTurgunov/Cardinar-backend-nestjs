import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsNotEmpty, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateRequestDto {
  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsInt()
  userId?: number;

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

  @ApiProperty({ example: 'john@example.com', required: false })
  @IsOptional()
  @IsEmail()
  @MaxLength(64)
  email?: string;

  @ApiProperty({ example: 'I need a custom cover for my car', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(2000)
  comments?: string;
}
