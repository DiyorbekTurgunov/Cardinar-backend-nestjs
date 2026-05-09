import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from './entities/request.entity';
import { CreateRequestDto } from './dto/create.dto';
import { UpdateRequestDto } from './dto/update.dto';

@Injectable()
export class RequestsService {
  constructor(
    @InjectRepository(Request)
    private readonly requestRepo: Repository<Request>,
  ) {}

  findAll(): Promise<Request[]> {
    return this.requestRepo.find({ relations: ['user'] });
  }

  async findOne(id: number): Promise<Request> {
    const request = await this.requestRepo.findOne({ where: { id }, relations: ['user'] });
    if (!request) throw new NotFoundException(`Request #${id} not found`);
    return request;
  }

  create(dto: CreateRequestDto): Promise<Request> {
    return this.requestRepo.save(this.requestRepo.create(dto));
  }

  async update(id: number, dto: UpdateRequestDto): Promise<Request> {
    await this.findOne(id);
    await this.requestRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.requestRepo.delete(id);
  }
}
