import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsString, MaxLength } from 'class-validator';
import { Type } from 'class-transformer';
import { BranchType } from '../../../configs/enums';

export class UpdateBranchesDto {
  @ApiProperty({ example: 'Chilonzor filiali' })
  @IsOptional()
  @IsString()
  @MaxLength(128)
  title?: string;

  @ApiProperty({ example: 'Toshkent, Chilonzor tumani' })
  @IsOptional()
  @IsString()
  @MaxLength(128)
  address?: string;

  @ApiProperty({ example: 'Chilonzor' })
  @IsOptional()
  @IsString()
  @MaxLength(64)
  district?: string;

  @ApiProperty({ example: 'Toshkent' })
  @IsOptional()
  @IsString()
  @MaxLength(64)
  region?: string;

  @ApiProperty({ example: '+998901234567' })
  @IsOptional()
  @IsString()
  @MaxLength(16)
  phoneNumber?: string;

  @ApiProperty({ example: 69.240562 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  longitude?: number;

  @ApiProperty({ example: 41.299496 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  latitude?: number;

  @ApiProperty({ example: true })
  @IsOptional()
  @IsBoolean()
  isActive?: boolean;

  @ApiProperty({ enum: BranchType, example: BranchType.OFFICIAL })
  @IsOptional()
  @IsEnum(BranchType)
  branchType?: BranchType;
}
