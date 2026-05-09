import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { OrdersService } from './orders.service';
import { OrdersController, OrderItemsController } from './orders.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderItem])],
  controllers: [OrdersController, OrderItemsController],
  providers: [OrdersService],
})
export class OrdersModule {}
