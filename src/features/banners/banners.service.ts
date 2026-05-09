import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Banner } from './entities/banner.entity';
import { CreateBannerDto } from './dto/create.dto';
import { UpdateBannerDto } from './dto/update.dto';

@Injectable()
export class BannersService {
  constructor(
    @InjectRepository(Banner)
    private readonly bannerRepo: Repository<Banner>,
  ) {}

  findAll(): Promise<Banner[]> {
    return this.bannerRepo.find();
  }

  async findOne(id: number): Promise<Banner> {
    const banner = await this.bannerRepo.findOneBy({ id });
    if (!banner) throw new NotFoundException(`Banner #${id} not found`);
    return banner;
  }

    create(dto: CreateBannerDto, image: Express.Multer.File): Promise<Banner> {
    return this.bannerRepo.save(this.bannerRepo.create(dto));
  }

  async update(id: number, dto: UpdateBannerDto): Promise<Banner> {
    await this.findOne(id);
    await this.bannerRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.bannerRepo.delete(id);
  }
}
