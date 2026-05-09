import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Category } from '../../../configs/enums';

@Entity('custom_models')
export class CustomModel extends BaseModel {
  @Column({ type: 'enum', enum: Category })
  category: Category;

  @Column({ type: 'varchar', length: 128, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 256 })
  image: string; // base image
}
