import { Column, Entity } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { BranchType } from '../../../configs/enums';

@Entity('branches')
export class Branch extends BaseModel {

  @Column({ type: 'varchar', length: 128 })
  title: string;

  @Column({ type: 'varchar', length: 128 })
  address: string;

  @Column({ type: 'varchar', length: 64, nullable: true })
  district: string | null;

  @Column({ type: 'varchar', length: 64 })
  region: string;

  @Column({ type: 'varchar', length: 16 })
  phoneNumber: string;

  @Column({ type: 'decimal', precision: 12, scale: 9 })
  longitude: number;

  @Column({ type: 'decimal', precision: 12, scale: 9 })
  latitude: number;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'enum', enum: BranchType })
  branchType: BranchType;
}
