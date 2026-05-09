import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateCarModelDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  carMakeId: number;

  @ApiProperty({ example: 'Camry' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  title: string;
}
