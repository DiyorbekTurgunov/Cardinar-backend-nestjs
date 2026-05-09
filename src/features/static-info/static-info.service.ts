import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StaticInfo } from './entities/static-info.entity';
import { CreateStaticInfoDto } from './dto/create.dto';
import { UpdateStaticInfoDto } from './dto/update.dto';

@Injectable()
export class StaticInfoService {
  constructor(
    @InjectRepository(StaticInfo)
    private readonly staticInfoRepo: Repository<StaticInfo>,
  ) {}

  findAll(): Promise<StaticInfo[]> {
    return this.staticInfoRepo.find();
  }

  async findOne(id: number): Promise<StaticInfo> {
    const info = await this.staticInfoRepo.findOneBy({ id });
    if (!info) throw new NotFoundException(`StaticInfo #${id} not found`);
    return info;
  }

  create(dto: CreateStaticInfoDto): Promise<StaticInfo> {
    return this.staticInfoRepo.save(this.staticInfoRepo.create(dto));
  }

  async update(id: number, dto: UpdateStaticInfoDto): Promise<StaticInfo> {
    await this.findOne(id);
    await this.staticInfoRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.staticInfoRepo.delete(id);
  }
}
