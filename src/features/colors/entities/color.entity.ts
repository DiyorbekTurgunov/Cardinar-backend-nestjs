import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';

@Entity('colors')
export class Color extends BaseModel {
  @Column({ type: 'varchar', length: 64, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 12, unique: true })
  color: string; // hex value
}
