import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Product } from './product.entity';

@Entity('images')
export class ProductImage extends BaseModel {
  @Column({ type: 'int' })
  productId: number;

  @ManyToOne(() => Product, (product) => product.images, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column({ type: 'varchar', length: 256 })
  image: string;

  @Column({ type: 'int' })
  position: number;
}
