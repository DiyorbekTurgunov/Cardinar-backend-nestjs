import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';

@Entity('social_links')
export class SocialLink extends BaseModel {
  @Column({ type: 'varchar', length: 64 })
  title: string;

  @Column({ type: 'varchar', length: 256, unique: true })
  link: string;

  @Column({ type: 'varchar', length: 128 })
  icon: string;
}
