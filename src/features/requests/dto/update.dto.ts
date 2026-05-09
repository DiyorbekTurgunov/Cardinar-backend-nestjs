import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, IsOptional, IsString, MaxLength } from 'class-validator';

export class UpdateRequestDto {
  @ApiProperty({ example: 1, required: false })
  @IsOptional()
  @IsInt()
  userId?: number;

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
