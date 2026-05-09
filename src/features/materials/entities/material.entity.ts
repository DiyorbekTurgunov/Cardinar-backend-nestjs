import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';

@Entity('materials')
export class Material extends BaseModel {
  @Column({ type: 'varchar', length: 64, unique: true })
  title: string;

  @Column({ type: 'varchar', length: 512, nullable: true })
  description: string | null;
}
