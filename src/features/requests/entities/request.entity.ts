import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { User } from '../../users/entities/user.entity';

@Entity('requests')
export class Request extends BaseModel {
  @Column({ type: 'int', nullable: true })
  userId: number | null;

  @ManyToOne(() => User, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'userId' })
  user: User | null;

  @Column({ type: 'varchar', length: 64 })
  fullName: string;

  @Column({ type: 'varchar', length: 16 })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  email: string | null;

  @Column({ type: 'varchar', length: 2000, nullable: true })
  comments: string | null;
}
