import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PhoneNumber } from './entities/phone-number.entity';
import { CreatePhoneNumberDto } from './dto/create.dto';
import { UpdatePhoneNumberDto } from './dto/update.dto';

@Injectable()
export class PhoneNumbersService {
  constructor(
    @InjectRepository(PhoneNumber)
    private readonly phoneNumberRepo: Repository<PhoneNumber>,
  ) {}

  findAll(): Promise<PhoneNumber[]> {
    return this.phoneNumberRepo.find();
  }

  async findOne(id: number): Promise<PhoneNumber> {
    const phoneNumber = await this.phoneNumberRepo.findOneBy({ id });
    if (!phoneNumber) throw new NotFoundException(`PhoneNumber #${id} not found`);
    return phoneNumber;
  }

  create(dto: CreatePhoneNumberDto): Promise<PhoneNumber> {
    return this.phoneNumberRepo.save(this.phoneNumberRepo.create(dto));
  }

  async update(id: number, dto: UpdatePhoneNumberDto): Promise<PhoneNumber> {
    await this.findOne(id);
    await this.phoneNumberRepo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await this.phoneNumberRepo.delete(id);
  }
}
