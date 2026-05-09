import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarMake } from './entities/car-make.entity';
import { CarModel } from './entities/car-model.entity';
import { CarMakesService } from './car-makes.service';
import { CarMakesController, CarModelsController } from './car-makes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CarMake, CarModel])],
  controllers: [CarMakesController, CarModelsController],
  providers: [CarMakesService],
})
export class CarMakesModule {}
