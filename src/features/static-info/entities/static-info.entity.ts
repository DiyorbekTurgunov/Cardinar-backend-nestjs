import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('static_info')
export class StaticInfo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 128 })
  address: string;

  @Column({ type: 'varchar', length: 16 })
  phoneNumber: string;

  @Column({ type: 'varchar', length: 128 })
  workingHours: string;

  @Column({ type: 'varchar', length: 64 })
  email: string;
}
