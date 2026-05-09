import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CustomProductsService } from './custom-products.service';
import { CreateCustomModelDto } from './dto/custom-model/create.dto';
import { UpdateCustomModelDto } from './dto/custom-model/update.dto';
import { CreateCustomProductDto } from './dto/custom-product/create.dto';
import { UpdateCustomProductDto } from './dto/custom-product/update.dto';
import { CreatePartDto } from './dto/part/create.dto';
import { UpdatePartDto } from './dto/part/update.dto';

@ApiTags('Custom Models')
@Controller('custom-models')
export class CustomModelsController {
  constructor(private readonly customProductsService: CustomProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all custom models' })
  findAll() {
    return this.customProductsService.findAllModels();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get custom model by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.customProductsService.findOneModel(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create custom model' })
  create(@Body() dto: CreateCustomModelDto) {
    return this.customProductsService.createModel(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update custom model' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCustomModelDto) {
    return this.customProductsService.updateModel(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete custom model' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.customProductsService.removeModel(id);
  }
}

@ApiTags('Custom Products')
@Controller('custom-products')
export class CustomProductsController {
  constructor(private readonly customProductsService: CustomProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all custom products' })
  findAll() {
    return this.customProductsService.findAllProducts();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get custom product by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.customProductsService.findOneProduct(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create custom product' })
  create(@Body() dto: CreateCustomProductDto) {
    return this.customProductsService.createProduct(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update custom product' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCustomProductDto) {
    return this.customProductsService.updateProduct(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete custom product' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.customProductsService.removeProduct(id);
  }
}

@ApiTags('Parts')
@Controller('parts')
export class PartsController {
  constructor(private readonly customProductsService: CustomProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all parts' })
  findAll() {
    return this.customProductsService.findAllParts();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get part by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.customProductsService.findOnePart(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create part' })
  create(@Body() dto: CreatePartDto) {
    return this.customProductsService.createPart(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update part' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePartDto) {
    return this.customProductsService.updatePart(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete part' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.customProductsService.removePart(id);
  }
}
