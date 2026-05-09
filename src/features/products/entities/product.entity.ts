import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Status } from '../../../configs/enums';
import { CategoryEntity } from '../../categories/entities/category.entity';
import { ProductImage } from './product-image.entity';
import { Articul } from './articul.entity';
import { ProductColor } from './product-color.entity';

@Entity('products')
export class Product extends BaseModel {
  @Column({ type: 'int' })
  categoryId: number;

  @ManyToOne(() => CategoryEntity, (category) => category.products, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'categoryId' })
  category: CategoryEntity;

  @Column({ type: 'varchar', length: 128, unique: true })
  title: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  price: number;

  @Column({ type: 'text', nullable: true })
  description: string | null;

  @Column({ type: 'enum', enum: Status, nullable: true })
  status: Status | null;

  @Column({ type: 'boolean', default: false })
  isPremium: boolean;

  @OneToMany(() => ProductImage, (image) => image.product)
  images: ProductImage[];

  @OneToMany(() => Articul, (articul) => articul.product)
  articuls: Articul[];

  @OneToMany(() => ProductColor, (productColor) => productColor.product)
  productColors: ProductColor[];
}
