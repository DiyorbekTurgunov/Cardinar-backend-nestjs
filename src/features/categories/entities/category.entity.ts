import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Product } from '../../products/entities/product.entity';

@Entity('categories')
export class CategoryEntity extends BaseModel {
  @Column({ type: 'varchar', length: 128, unique: true })
  title: string;

  @OneToMany(() => Product, (product) => product.category)
  products: Product[];
}
