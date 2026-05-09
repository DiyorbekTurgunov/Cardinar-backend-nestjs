import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Color } from './entities/color.entity';
import { CreateColorDto } from './dto/create.dto';
import { UpdateColorDto } from './dto/update.dto';

@Injectable()
export class ColorsService {
  constructor(
    @InjectRepository(Color)
    private readonly colorRepo: Repository<Color>,
  ) {}

  findAll(): Promise<Color[]> {
    return this.colorRepo.find();
  }

  async findOne(id: number): Promise<Color> {
    const color = await this.colorRepo.findOneBy({ id });
    if (!color) throw new NotFoundException(`Color #${id} not found`);
    return color;
  }

  create(dto: CreateColorDto): Promise<Color> {
    return this.colorRepo.save(this.colorRepo.create(dto));
  }

  async update(id: number, dto: UpdateColorDto): Promise<Color> {
    await this.findOne(id);
    await this.colorRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.colorRepo.delete(id);
  }
}
