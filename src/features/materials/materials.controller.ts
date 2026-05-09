import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { MaterialsService } from './materials.service';
import { CreateMaterialDto } from './dto/create.dto';
import { UpdateMaterialDto } from './dto/update.dto';

@ApiTags('Materials')
@Controller('materials')
export class MaterialsController {
  constructor(private readonly materialsService: MaterialsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all materials' })
  findAll() {
    return this.materialsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get material by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.materialsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create material' })
  create(@Body() dto: CreateMaterialDto) {
    return this.materialsService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update material' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateMaterialDto) {
    return this.materialsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete material' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.materialsService.remove(id);
  }
}
