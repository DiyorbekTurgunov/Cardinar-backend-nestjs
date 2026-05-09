import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CartService } from './cart.service';
import { CreateCartItemDto } from './dto/create.dto';
import { UpdateCartItemDto } from './dto/update.dto';

@ApiTags('Cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  @ApiOperation({ summary: 'Get all cart items' })
  findAll() {
    return this.cartService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get cart item by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.cartService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Add item to cart' })
  create(@Body() dto: CreateCartItemDto) {
    return this.cartService.create(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update cart item' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateCartItemDto) {
    return this.cartService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove item from cart' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.cartService.remove(id);
  }
}
