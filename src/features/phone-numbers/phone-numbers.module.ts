import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhoneNumber } from './entities/phone-number.entity';
import { PhoneNumbersService } from './phone-numbers.service';
import { PhoneNumbersController } from './phone-numbers.controller';

@Module({
  imports: [TypeOrmModule.forFeature([PhoneNumber])],
  controllers: [PhoneNumbersController],
  providers: [PhoneNumbersService],
})
export class PhoneNumbersModule {}
