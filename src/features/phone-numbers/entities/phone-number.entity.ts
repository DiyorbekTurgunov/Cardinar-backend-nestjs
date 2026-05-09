import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';

@Entity('phone_numbers')
export class PhoneNumber extends BaseModel {
  @Column({ type: 'varchar', length: 16, unique: true })
  phoneNumber: string;
}
