import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoryEntity } from './entities/category.entity';
import { CreateCategoryDto } from './dto/create.dto';
import { UpdateCategoryDto } from './dto/update.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepo: Repository<CategoryEntity>,
  ) {}

  findAll(): Promise<CategoryEntity[]> {
    return this.categoryRepo.find();
  }

  async findOne(id: number): Promise<CategoryEntity> {
    const category = await this.categoryRepo.findOneBy({ id });
    if (!category) throw new NotFoundException(`Category #${id} not found`);
    return category;
  }

  create(dto: CreateCategoryDto): Promise<CategoryEntity> {
    return this.categoryRepo.save(this.categoryRepo.create(dto));
  }

  async update(id: number, dto: UpdateCategoryDto): Promise<CategoryEntity> {
    await this.findOne(id);
    await this.categoryRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.categoryRepo.delete(id);
  }
}
