import {Allow, IsBoolean, IsString, MaxLength} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateBannerDto {

    @ApiProperty({ example: 'summer sale'})
    @IsString()
    @MaxLength(128)
    title: string;

    @Allow()
    @ApiProperty({ type: String, format: "binary" })
    @IsString()
    @MaxLength(256)
    image: string;

    @ApiProperty({ example: true })
    @IsBoolean()
    isActive: boolean;
}