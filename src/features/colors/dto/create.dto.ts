import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateColorDto {
  @ApiProperty({ example: 'Red' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  title: string;

  @ApiProperty({ example: '#FF0000' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(12)
  color: string;
}
