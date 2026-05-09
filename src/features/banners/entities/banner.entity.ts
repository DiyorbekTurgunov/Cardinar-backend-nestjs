import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';

@Entity('banners')
export class Banner extends BaseModel {
  @Column({ type: 'varchar', length: 128 })
  title: string;

  @Column({ type: 'varchar', length: 256 })
  image: string;

  @Column({ type: 'boolean' })
  isActive: boolean;
}
