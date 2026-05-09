import { BranchType } from '../../../configs/enums';
import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateBranchesDto {
  @ApiProperty({ example: 'Chilonzor filiali' })
  @IsString()
  @MaxLength(128)
  title: string;

  @ApiProperty({ example: 'Toshkent, Chilonzor tumani' })
  @IsString()
  @MaxLength(128)
  address: string;

  @ApiProperty({ example: 'Chilonzor', required: false })
  @IsOptional()
  @IsString()
  @MaxLength(64)
  district?: string;

  @ApiProperty({ example: 'Toshkent' })
  @IsString()
  @MaxLength(64)
  region: string;

  @ApiProperty({ example: '+998901234567' })
  @IsString()
  @MaxLength(16)
  phoneNumber: string;

  @ApiProperty({ example: 69.240562 })
  @Type(() => Number)
  @IsNumber()
  longitude: number;

  @ApiProperty({ example: 41.299496 })
  @Type(() => Number)
  @IsNumber()
  latitude: number;

  @ApiProperty({ example: true, required: false })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ enum: BranchType, example: BranchType.OFFICIAL })
  @IsEnum(BranchType)
  branchType: BranchType;
}
