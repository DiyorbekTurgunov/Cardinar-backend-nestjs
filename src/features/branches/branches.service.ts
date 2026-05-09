import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Branch } from './entities/branch.entity';
import { CreateBranchesDto } from './dto/create.dto';
import { UpdateBranchesDto } from './dto/update.dto';

@Injectable()
export class BranchesService {
  constructor(
    @InjectRepository(Branch)
    private readonly branchRepo: Repository<Branch>,
  ) {}

  findAll(): Promise<Branch[]> {
    return this.branchRepo.find();
  }

  async findOne(id: number): Promise<Branch> {
    const branch = await this.branchRepo.findOneBy({ id });
    if (!branch) throw new NotFoundException(`Branch #${id} not found`);
    return branch;
  }

  create(dto: CreateBranchesDto): Promise<Branch> {
    return this.branchRepo.save(this.branchRepo.create(dto));
  }

  async update(id: number, dto: UpdateBranchesDto): Promise<Branch> {
    await this.findOne(id);
    await this.branchRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.branchRepo.delete(id);
  }
}
