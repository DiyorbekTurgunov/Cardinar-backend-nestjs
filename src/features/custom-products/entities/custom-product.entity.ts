import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Category } from '../../../configs/enums';
import { CarMake } from '../../car-makes/entities/car-make.entity';
import { CarModel } from '../../car-makes/entities/car-model.entity';
import { CustomModel } from './custom-model.entity';

@Entity('custom_products')
export class CustomProduct extends BaseModel {
  @Column({ type: 'varchar', length: 64 })
  fullName: string;

  @Column({ type: 'varchar', length: 16 })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  email: string | null;

  @Column({ type: 'int' })
  carMakeId: number;

  @ManyToOne(() => CarMake, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'carMakeId' })
  carMake: CarMake;

  @Column({ type: 'int' })
  carModelId: number;

  @ManyToOne(() => CarModel, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'carModelId' })
  carModel: CarModel;

  @Column({ type: 'enum', enum: Category })
  category: Category;

  @Column({ type: 'int' })
  modelId: number;

  @ManyToOne(() => CustomModel, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'modelId' })
  model: CustomModel;

  @Column({ type: 'boolean' })
  withLogo: boolean;

  @Column({ type: 'varchar', length: 256 })
  image: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;
}
