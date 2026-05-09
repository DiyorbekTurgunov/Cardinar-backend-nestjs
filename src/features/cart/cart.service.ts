import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CartItem } from './entities/cart-item.entity';
import { CreateCartItemDto } from './dto/create.dto';
import { UpdateCartItemDto } from './dto/update.dto';

@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartItem)
    private readonly cartItemRepo: Repository<CartItem>,
  ) {}

  findAll(): Promise<CartItem[]> {
    return this.cartItemRepo.find({ relations: ['product', 'articul'] });
  }

  async findOne(id: number): Promise<CartItem> {
    const item = await this.cartItemRepo.findOne({ where: { id }, relations: ['product', 'articul'] });
    if (!item) throw new NotFoundException(`CartItem #${id} not found`);
    return item;
  }

  create(dto: CreateCartItemDto): Promise<CartItem> {
    return this.cartItemRepo.save(this.cartItemRepo.create(dto));
  }

  async update(id: number, dto: UpdateCartItemDto): Promise<CartItem> {
    await this.findOne(id);
    await this.cartItemRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.cartItemRepo.delete(id);
  }
}
