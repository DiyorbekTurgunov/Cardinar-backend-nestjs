import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ColorsService } from './colors.service';
import { CreateColorDto } from './dto/create.dto';
import { UpdateColorDto } from './dto/update.dto';

@ApiTags('Colors')
@Controller('colors')
export class ColorsController {
  constructor(private readonly colorsService: ColorsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all colors' })
  findAll() {
    return this.colorsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get color by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.colorsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create color' })
  create(@Body() dto: CreateColorDto) {
    return this.colorsService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update color' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateColorDto) {
    return this.colorsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete color' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.colorsService.remove(id);
  }
}
