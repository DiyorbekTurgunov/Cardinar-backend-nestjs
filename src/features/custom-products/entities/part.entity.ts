import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../core/base-model';
import { Category, Part } from '../../../configs/enums';
import { Material } from '../../materials/entities/material.entity';
import { Color } from '../../colors/entities/color.entity';

@Entity('parts')
export class PartEntity extends BaseModel {
  @Column({ type: 'enum', enum: Category })
  category: Category;

  @Column({ type: 'enum', enum: Part })
  part: Part;

  @Column({ type: 'varchar', length: 128, nullable: true })
  title: string | null;

  @Column({ type: 'int' })
  materialId: number;

  @ManyToOne(() => Material, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'materialId' })
  material: Material;

  @Column({ type: 'int' })
  colorId: number;

  @ManyToOne(() => Color, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'colorId' })
  color: Color;

  @Column({ type: 'varchar', length: 256 })
  image: string;
}
