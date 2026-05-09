import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomModel } from './entities/custom-model.entity';
import { CustomProduct } from './entities/custom-product.entity';
import { PartEntity } from './entities/part.entity';
import { CreateCustomModelDto } from './dto/custom-model/create.dto';
import { UpdateCustomModelDto } from './dto/custom-model/update.dto';
import { CreateCustomProductDto } from './dto/custom-product/create.dto';
import { UpdateCustomProductDto } from './dto/custom-product/update.dto';
import { CreatePartDto } from './dto/part/create.dto';
import { UpdatePartDto } from './dto/part/update.dto';

@Injectable()
export class CustomProductsService {
  constructor(
    @InjectRepository(CustomModel)
    private readonly customModelRepo: Repository<CustomModel>,
    @InjectRepository(CustomProduct)
    private readonly customProductRepo: Repository<CustomProduct>,
    @InjectRepository(PartEntity)
    private readonly partRepo: Repository<PartEntity>,
  ) {}

  // Custom Models
  findAllModels(): Promise<CustomModel[]> {
    return this.customModelRepo.find();
  }

  async findOneModel(id: number): Promise<CustomModel> {
    const model = await this.customModelRepo.findOneBy({ id });
    if (!model) throw new NotFoundException(`CustomModel #${id} not found`);
    return model;
  }

  createModel(dto: CreateCustomModelDto): Promise<CustomModel> {
    return this.customModelRepo.save(this.customModelRepo.create(dto));
  }

  async updateModel(id: number, dto: UpdateCustomModelDto): Promise<CustomModel> {
    await this.findOneModel(id);
    await this.customModelRepo.update(id, dto);
    return this.findOneModel(id);
  }

  async removeModel(id: number): Promise<void> {
    await this.findOneModel(id);
    await this.customModelRepo.delete(id);
  }

  // Custom Products
  findAllProducts(): Promise<CustomProduct[]> {
    return this.customProductRepo.find({ relations: ['carMake', 'carModel', 'model'] });
  }

  async findOneProduct(id: number): Promise<CustomProduct> {
    const product = await this.customProductRepo.findOne({
      where: { id },
      relations: ['carMake', 'carModel', 'model'],
    });
    if (!product) throw new NotFoundException(`CustomProduct #${id} not found`);
    return product;
  }

  createProduct(dto: CreateCustomProductDto): Promise<CustomProduct> {
    return this.customProductRepo.save(this.customProductRepo.create(dto));
  }

  async updateProduct(id: number, dto: UpdateCustomProductDto): Promise<CustomProduct> {
    await this.findOneProduct(id);
    await this.customProductRepo.update(id, dto);
    return this.findOneProduct(id);
  }

  async removeProduct(id: number): Promise<void> {
    await this.findOneProduct(id);
    await this.customProductRepo.delete(id);
  }

  // Parts
  findAllParts(): Promise<PartEntity[]> {
    return this.partRepo.find({ relations: ['material', 'color'] });
  }

  async findOnePart(id: number): Promise<PartEntity> {
    const part = await this.partRepo.findOne({ where: { id }, relations: ['material', 'color'] });
    if (!part) throw new NotFoundException(`Part #${id} not found`);
    return part;
  }

  createPart(dto: CreatePartDto): Promise<PartEntity> {
    return this.partRepo.save(this.partRepo.create(dto));
  }

  async updatePart(id: number, dto: UpdatePartDto): Promise<PartEntity> {
    await this.findOnePart(id);
    await this.partRepo.update(id, dto);
    return this.findOnePart(id);
  }

  async removePart(id: number): Promise<void> {
    await this.findOnePart(id);
    await this.partRepo.delete(id);
  }
}
