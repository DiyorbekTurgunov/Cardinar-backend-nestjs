import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { CarMake } from './car-make.entity';

@Entity('car_models')
export class CarModel extends BaseModel {

  @Column({ type: 'int' })
  carMakeId: number;

  @ManyToOne(() => CarMake, (carMake) => carMake.carModels, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'carMakeId' })
  carMake: CarMake;

  @Column({ type: 'varchar', length: 64, unique: true })
  title: string;
}
