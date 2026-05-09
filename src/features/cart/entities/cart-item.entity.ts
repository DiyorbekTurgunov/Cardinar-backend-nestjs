import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Product } from '../../products/entities/product.entity';
import { Articul } from '../../products/entities/articul.entity';

@Entity('cart_items')
export class CartItem extends BaseModel {

  @Column({ type: 'int' })
  productId: number;

  @ManyToOne(() => Product, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column({ type: 'int' })
  articulId: number;

  @ManyToOne(() => Articul, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'articulId' })
  articul: Articul;

  @Column({ type: 'int', default: 1 })
  quantity: number;
}
