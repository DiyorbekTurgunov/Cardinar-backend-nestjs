import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { CreateOrderDto } from './dto/order/create.dto';
import { UpdateOrderDto } from './dto/order/update.dto';
import { CreateOrderItemDto } from './dto/order-item/create.dto';
import { UpdateOrderItemDto } from './dto/order-item/update.dto';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
    @InjectRepository(OrderItem)
    private readonly orderItemRepo: Repository<OrderItem>,
  ) {}

  // Orders
  findAllOrders(): Promise<Order[]> {
    return this.orderRepo.find({ relations: ['user', 'branch', 'items'] });
  }

  async findOneOrder(id: number): Promise<Order> {
    const order = await this.orderRepo.findOne({ where: { id }, relations: ['user', 'branch', 'items'] });
    if (!order) throw new NotFoundException(`Order #${id} not found`);
    return order;
  }

  createOrder(dto: CreateOrderDto): Promise<Order> {
    return this.orderRepo.save(this.orderRepo.create(dto));
  }

  async updateOrder(id: number, dto: UpdateOrderDto): Promise<Order> {
    await this.findOneOrder(id);
    await this.orderRepo.update(id, dto);
    return this.findOneOrder(id);
  }

  async removeOrder(id: number): Promise<void> {
    await this.findOneOrder(id);
    await this.orderRepo.delete(id);
  }

  // Order Items
  findAllItems(): Promise<OrderItem[]> {
    return this.orderItemRepo.find({ relations: ['order', 'product', 'articul'] });
  }

  async findOneItem(id: number): Promise<OrderItem> {
    const item = await this.orderItemRepo.findOne({ where: { id }, relations: ['order', 'product', 'articul'] });
    if (!item) throw new NotFoundException(`OrderItem #${id} not found`);
    return item;
  }

  createItem(dto: CreateOrderItemDto): Promise<OrderItem> {
    return this.orderItemRepo.save(this.orderItemRepo.create(dto));
  }

  async updateItem(id: number, dto: UpdateOrderItemDto): Promise<OrderItem> {
    await this.findOneItem(id);
    await this.orderItemRepo.update(id, dto);
    return this.findOneItem(id);
  }

  async removeItem(id: number): Promise<void> {
    await this.findOneItem(id);
    await this.orderItemRepo.delete(id);
  }
}
