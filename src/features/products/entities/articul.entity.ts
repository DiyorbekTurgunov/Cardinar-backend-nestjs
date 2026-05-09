import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Product } from './product.entity';
import { CarModel } from '../../car-makes/entities/car-model.entity';

@Entity('articuls')
export class Articul extends BaseModel {
  @Column({ type: 'int' })
  productId: number;

  @ManyToOne(() => Product, (product) => product.articuls, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'productId' })
  product: Product;

  @Column({ type: 'int' })
  carModelId: number;

  @ManyToOne(() => CarModel, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'carModelId' })
  carModel: CarModel;
}
