import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from './dto/order/create.dto';
import { UpdateOrderDto } from './dto/order/update.dto';
import { CreateOrderItemDto } from './dto/order-item/create.dto';
import { UpdateOrderItemDto } from './dto/order-item/update.dto';

@ApiTags('Orders')
@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all orders' })
  findAll() {
    return this.ordersService.findAllOrders();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get order by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.findOneOrder(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create order' })
  create(@Body() dto: CreateOrderDto) {
    return this.ordersService.createOrder(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update order' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateOrderDto) {
    return this.ordersService.updateOrder(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete order' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.removeOrder(id);
  }
}

@ApiTags('Order Items')
@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all order items' })
  findAll() {
    return this.ordersService.findAllItems();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get order item by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.findOneItem(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create order item' })
  create(@Body() dto: CreateOrderItemDto) {
    return this.ordersService.createItem(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update order item' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateOrderItemDto) {
    return this.ordersService.updateItem(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete order item' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.ordersService.removeItem(id);
  }
}
