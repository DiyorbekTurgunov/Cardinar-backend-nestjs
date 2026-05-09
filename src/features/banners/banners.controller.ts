import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    UploadedFile,
    UseInterceptors
} from '@nestjs/common';
import {ApiConsumes, ApiOperation, ApiTags} from '@nestjs/swagger';
import {BannersService} from './banners.service';
import {CreateBannerDto} from './dto/create.dto';
import {UpdateBannerDto} from './dto/update.dto';
import {FileInterceptor} from "@nestjs/platform-express";

let storageOptions;

@ApiTags('Banners')
@Controller('banners')
export class BannersController {
    constructor(private readonly bannersService: BannersService) {
    }

    @Get()
    @ApiOperation({summary: 'Get all banners'})
    findAll() {
        return this.bannersService.findAll();
    }

    @Get(':id')
    @ApiOperation({summary: 'Get banner by id'})
    findOne(@Param('id', ParseIntPipe) id: number) {
        return this.bannersService.findOne(id);
    }

    @Post()
    @ApiOperation({summary: 'Create banner'})
    @ApiConsumes("multipart/form-data")
    @UseInterceptors(FileInterceptor("image", {storage: storageOptions}))

    create(@Body() payload: CreateBannerDto, @UploadedFile() image: Express.Multer.File) {
        return this.bannersService.create(payload, image);
    }

    @Patch(':id')
    @ApiOperation({summary: 'Update banner'})
    update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateBannerDto) {
        return this.bannersService.update(id, dto);
    }

    @Delete(':id')
    @ApiOperation({summary: 'Delete banner'})
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.bannersService.remove(id);
    }
}
