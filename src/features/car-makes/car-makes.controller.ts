import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CarMakesService } from './car-makes.service';
import { CreateCarMakeDto } from './dto/car-make/create.dto';
import { UpdateCarMakeDto } from './dto/car-make/update.dto';
import { CreateCarModelDto } from './dto/car-model/create.dto';
import { UpdateCarModelDto } from './dto/car-model/update.dto';

@ApiTags('Car Makes')
@Controller('car-makes')
export class CarMakesController {
  constructor(private readonly carMakesService: CarMakesService) {}

  // Car Makes
  @Get()
  @ApiOperation({ summary: 'Get all car makes' })
  findAllMakes() {
    return this.carMakesService.findAllMakes();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get car make by id' })
  findOneMake(@Param('id', ParseIntPipe) id: number) {
    return this.carMakesService.findOneMake(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create car make' })
  createMake(@Body() dto: CreateCarMakeDto) {
    return this.carMakesService.createMake(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update car make' })
  updateMake(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCarMakeDto) {
    return this.carMakesService.updateMake(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete car make' })
  removeMake(@Param('id', ParseIntPipe) id: number) {
    return this.carMakesService.removeMake(id);
  }
}

@ApiTags('Car Models')
@Controller('car-models')
export class CarModelsController {
  constructor(private readonly carMakesService: CarMakesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all car models' })
  findAllModels() {
    return this.carMakesService.findAllModels();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get car model by id' })
  findOneModel(@Param('id', ParseIntPipe) id: number) {
    return this.carMakesService.findOneModel(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create car model' })
  createModel(@Body() dto: CreateCarModelDto) {
    return this.carMakesService.createModel(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update car model' })
  updateModel(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCarModelDto) {
    return this.carMakesService.updateModel(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete car model' })
  removeModel(@Param('id', ParseIntPipe) id: number) {
    return this.carMakesService.removeModel(id);
  }
}
