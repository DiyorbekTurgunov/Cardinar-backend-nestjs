import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Product } from './product.entity';
import { Color } from '../../colors/entities/color.entity';

@Entity('product_colors')
export class ProductColor extends BaseModel {
  @Column({ type: 'int' })
  productId: number;

  @ManyToOne(() => Product, (product) => product.productColors, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column({ type: 'int' })
  colorId: number;

  @ManyToOne(() => Color, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'colorId' })
  color: Color;
}
