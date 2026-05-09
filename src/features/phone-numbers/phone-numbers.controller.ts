import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { PhoneNumbersService } from './phone-numbers.service';
import { CreatePhoneNumberDto } from './dto/create.dto';
import { UpdatePhoneNumberDto } from './dto/update.dto';

@ApiTags('Phone Numbers')
@Controller('phone-numbers')
export class PhoneNumbersController {
  constructor(private readonly phoneNumbersService: PhoneNumbersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all phone numbers' })
  findAll() {
    return this.phoneNumbersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get phone number by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.phoneNumbersService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create phone number' })
  create(@Body() dto: CreatePhoneNumberDto) {
    return this.phoneNumbersService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update phone number' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePhoneNumberDto) {
    return this.phoneNumbersService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete phone number' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.phoneNumbersService.remove(id);
  }
}
