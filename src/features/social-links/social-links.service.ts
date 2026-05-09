import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SocialLink } from './entities/social-link.entity';
import { CreateSocialLinkDto } from './dto/create.dto';
import { UpdateSocialLinkDto } from './dto/update.dto';

@Injectable()
export class SocialLinksService {
  constructor(
    @InjectRepository(SocialLink)
    private readonly socialLinkRepo: Repository<SocialLink>,
  ) {}

  findAll(): Promise<SocialLink[]> {
    return this.socialLinkRepo.find();
  }

  async findOne(id: number): Promise<SocialLink> {
    const socialLink = await this.socialLinkRepo.findOneBy({ id });
    if (!socialLink) throw new NotFoundException(`SocialLink #${id} not found`);
    return socialLink;
  }

  create(dto: CreateSocialLinkDto): Promise<SocialLink> {
    return this.socialLinkRepo.save(this.socialLinkRepo.create(dto));
  }

  async update(id: number, dto: UpdateSocialLinkDto): Promise<SocialLink> {
    await this.findOne(id);
    await this.socialLinkRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.socialLinkRepo.delete(id);
  }
}
