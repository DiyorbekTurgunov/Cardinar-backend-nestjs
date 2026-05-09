import { Column, Entity, OneToMany } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { CarModel } from './car-model.entity';

@Entity('car_makes')
export class CarMake extends BaseModel {

  @Column({ type: 'varchar', length: 64, unique: true })
  title: string;

  @OneToMany(() => CarModel, (carModel) => carModel.carMake)
  carModels: CarModel[];
}
