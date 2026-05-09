import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCarMakeDto {
  @ApiProperty({ example: 'Toyota' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  title: string;
}
