import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SocialLinksService } from './social-links.service';
import { CreateSocialLinkDto } from './dto/create.dto';
import { UpdateSocialLinkDto } from './dto/update.dto';

@ApiTags('Social Links')
@Controller('social-links')
export class SocialLinksController {
  constructor(private readonly socialLinksService: SocialLinksService) {}

  @Get()
  @ApiOperation({ summary: 'Get all social links' })
  findAll() {
    return this.socialLinksService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get social link by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.socialLinksService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create social link' })
  create(@Body() dto: CreateSocialLinkDto) {
    return this.socialLinksService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update social link' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateSocialLinkDto) {
    return this.socialLinksService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete social link' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.socialLinksService.remove(id);
  }
}
