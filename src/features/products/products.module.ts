import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductImage } from './entities/product-image.entity';
import { ProductColor } from './entities/product-color.entity';
import { Articul } from './entities/articul.entity';
import { ProductsService } from './products.service';
import {
  ProductsController,
  ProductImagesController,
  ProductColorsController,
  ArticulsController,
} from './products.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product, ProductImage, ProductColor, Articul])],
  controllers: [ProductsController, ProductImagesController, ProductColorsController, ArticulsController],
  providers: [ProductsService],
})
export class ProductsModule {}
