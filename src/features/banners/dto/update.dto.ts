import {IsBoolean, IsOptional, IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class UpdateBannerDto {

    @ApiProperty()
    @IsOptional()
    @IsString()
    @MaxLength(128)
    title?: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @MaxLength(256)
    image?: string;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    isActive?: boolean;
}