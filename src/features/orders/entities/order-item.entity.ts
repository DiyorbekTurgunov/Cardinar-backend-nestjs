import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Order } from './order.entity';
import { Product } from '../../products/entities/product.entity';
import { Articul } from '../../products/entities/articul.entity';

@Entity('order_items')
export class OrderItem extends BaseModel {
  @Column({ type: 'int' })
  orderId: number;t

  @ManyToOne(() => Order, (order) => order.items, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @Column({ type: 'int' })
  productId: number;

  @ManyToOne(() => Product, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column({ type: 'int' })
  articulId: number;

  @ManyToOne(() => Articul, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'articulId' })
  articul: Articul;

  @Column({ type: 'int', default: 1 })
  quantity: number;
}
