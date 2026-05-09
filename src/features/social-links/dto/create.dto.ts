import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl, MaxLength } from 'class-validator';

export class CreateSocialLinkDto {
  @ApiProperty({ example: 'Instagram' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(64)
  title: string;

  @ApiProperty({ example: 'https://instagram.com/example' })
  @IsUrl()
  @MaxLength(256)
  link: string;

  @ApiProperty({ example: 'https://example.com/icons/instagram.svg' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(128)
  icon: string;
}
