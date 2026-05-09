import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarMake } from './entities/car-make.entity';
import { CarModel } from './entities/car-model.entity';
import { CreateCarMakeDto } from './dto/car-make/create.dto';
import { UpdateCarMakeDto } from './dto/car-make/update.dto';
import { CreateCarModelDto } from './dto/car-model/create.dto';
import { UpdateCarModelDto } from './dto/car-model/update.dto';

@Injectable()
export class CarMakesService {
  constructor(
    @InjectRepository(CarMake)
    private readonly carMakeRepo: Repository<CarMake>,
    @InjectRepository(CarModel)
    private readonly carModelRepo: Repository<CarModel>,
  ) {}

  // Car Makes
  findAllMakes(): Promise<CarMake[]> {
    return this.carMakeRepo.find({ relations: ['carModels'] });
  }

  async findOneMake(id: number): Promise<CarMake> {
    const make = await this.carMakeRepo.findOne({ where: { id }, relations: ['carModels'] });
    if (!make) throw new NotFoundException(`CarMake #${id} not found`);
    return make;
  }

  createMake(dto: CreateCarMakeDto): Promise<CarMake> {
    return this.carMakeRepo.save(this.carMakeRepo.create(dto));
  }

  async updateMake(id: number, dto: UpdateCarMakeDto): Promise<CarMake> {
    await this.findOneMake(id);
    await this.carMakeRepo.update(id, dto);
    return this.findOneMake(id);
  }

  async removeMake(id: number): Promise<void> {
    await this.findOneMake(id);
    await this.carMakeRepo.delete(id);
  }

  // Car Models
  findAllModels(): Promise<CarModel[]> {
    return this.carModelRepo.find({ relations: ['carMake'] });
  }

  async findOneModel(id: number): Promise<CarModel> {
    const model = await this.carModelRepo.findOne({ where: { id }, relations: ['carMake'] });
    if (!model) throw new NotFoundException(`CarModel #${id} not found`);
    return model;
  }

  createModel(dto: CreateCarModelDto): Promise<CarModel> {
    return this.carModelRepo.save(this.carModelRepo.create(dto));
  }

  async updateModel(id: number, dto: UpdateCarModelDto): Promise<CarModel> {
    await this.findOneModel(id);
    await this.carModelRepo.update(id, dto);
    return this.findOneModel(id);
  }

  async removeModel(id: number): Promise<void> {
    await this.findOneModel(id);
    await this.carModelRepo.delete(id);
  }
}
