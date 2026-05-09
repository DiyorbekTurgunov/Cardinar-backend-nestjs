import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { PaymentMethod, OrderStatus } from '../../../configs/enums';
import { User } from '../../users/entities/user.entity';
import { Branch } from '../../branches/entities/branch.entity';
import { OrderItem } from './order-item.entity';

@Entity('orders')
export class Order extends BaseModel {
  @Column({ type: 'int' })
  userId: number;

  @ManyToOne(() => User, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'int' })
  branchId: number;

  @ManyToOne(() => Branch, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'branchId' })
  branch: Branch;

  @Column({ type: 'varchar', length: 64 })
  fullName: string;

  @Column({ type: 'varchar', length: 16 })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  email: string | null;

  @Column({ type: 'boolean' })
  delivery: boolean;

  @Column({ type: 'enum', enum: PaymentMethod })
  paymentMethod: PaymentMethod;

  @Column({ type: 'enum', enum: OrderStatus })
  status: OrderStatus;

  @OneToMany(() => OrderItem, (item) => item.order)
  items: OrderItem[];
}
