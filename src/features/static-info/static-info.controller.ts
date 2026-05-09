import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { StaticInfoService } from './static-info.service';
import { CreateStaticInfoDto } from './dto/create.dto';
import { UpdateStaticInfoDto } from './dto/update.dto';

@ApiTags('Static Info')
@Controller('static-info')
export class StaticInfoController {
  constructor(private readonly staticInfoService: StaticInfoService) {}

  @Get()
  @ApiOperation({ summary: 'Get all static info' })
  findAll() {
    return this.staticInfoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get static info by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.staticInfoService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create static info' })
  create(@Body() dto: CreateStaticInfoDto) {
    return this.staticInfoService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update static info' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateStaticInfoDto) {
    return this.staticInfoService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete static info' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.staticInfoService.remove(id);
  }
}
