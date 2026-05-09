import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomModel } from './entities/custom-model.entity';
import { CustomProduct } from './entities/custom-product.entity';
import { PartEntity } from './entities/part.entity';
import { CustomProductsService } from './custom-products.service';
import {
  CustomModelsController,
  CustomProductsController,
  PartsController,
} from './custom-products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CustomModel, CustomProduct, PartEntity])],
  controllers: [CustomModelsController, CustomProductsController, PartsController],
  providers: [CustomProductsService],
})
export class CustomProductsModule {}
