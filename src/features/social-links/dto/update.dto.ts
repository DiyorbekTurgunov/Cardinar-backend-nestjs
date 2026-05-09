import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUrl, MaxLength } from 'class-validator';

export class UpdateSocialLinkDto {
  @ApiProperty({ example: 'Instagram' })
  @IsOptional()
  @IsString()
  @MaxLength(64)
  title?: string;

  @ApiProperty({ example: 'https://instagram.com/example' })
  @IsOptional()
  @IsUrl()
  @MaxLength(256)
  link?: string;

  @ApiProperty({ example: 'https://example.com/icons/instagram.svg' })
  @IsOptional()
  @IsString()
  @MaxLength(128)
  icon?: string;
}
