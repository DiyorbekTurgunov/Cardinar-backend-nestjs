import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RequestsService } from './requests.service';
import { CreateRequestDto } from './dto/create.dto';
import { UpdateRequestDto } from './dto/update.dto';

@ApiTags('Requests')
@Controller('requests')
export class RequestsController {
  constructor(private readonly requestsService: RequestsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all requests' })
  findAll() {
    return this.requestsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get request by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.requestsService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create request' })
  create(@Body() dto: CreateRequestDto) {
    return this.requestsService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update request' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateRequestDto) {
    return this.requestsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete request' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.requestsService.remove(id);
  }
}
