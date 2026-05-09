import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { BranchesService } from './branches.service';
import { CreateBranchesDto } from './dto/create.dto';
import { UpdateBranchesDto } from './dto/update.dto';

@ApiTags('Branches')
@Controller('branches')
export class BranchesController {
  constructor(private readonly branchesService: BranchesService) {}

  @Get()
  @ApiOperation({ summary: 'Get all branches' })
  findAll() {
    return this.branchesService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get branch by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.branchesService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create branch' })
  create(@Body() dto: CreateBranchesDto) {
    return this.branchesService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update branch' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateBranchesDto) {
    return this.branchesService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete branch' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.branchesService.remove(id);
  }
}
