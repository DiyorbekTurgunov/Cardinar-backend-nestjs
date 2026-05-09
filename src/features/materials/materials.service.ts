import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Material } from './entities/material.entity';
import { CreateMaterialDto } from './dto/create.dto';
import { UpdateMaterialDto } from './dto/update.dto';

@Injectable()
export class MaterialsService {
  constructor(
    @InjectRepository(Material)
    private readonly materialRepo: Repository<Material>,
  ) {}

  findAll(): Promise<Material[]> {
    return this.materialRepo.find();
  }

  async findOne(id: number): Promise<Material> {
    const material = await this.materialRepo.findOneBy({ id });
    if (!material) throw new NotFoundException(`Material #${id} not found`);
    return material;
  }

  create(dto: CreateMaterialDto): Promise<Material> {
    return this.materialRepo.save(this.materialRepo.create(dto));
  }

  async update(id: number, dto: UpdateMaterialDto): Promise<Material> {
    await this.findOne(id);
    await this.materialRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.materialRepo.delete(id);
  }
}
