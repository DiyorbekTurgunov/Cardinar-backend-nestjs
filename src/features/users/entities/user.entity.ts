import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';

@Entity('users')
export class User extends BaseModel {
  @Column({ type: 'varchar', length: 64 })
  fullName: string;

  @Column({ type: 'varchar', length: 16, unique: true })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 64, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 128 })
  password: string;

  @Column({ type: 'boolean', default: false })
  isAdmin: boolean;
}
