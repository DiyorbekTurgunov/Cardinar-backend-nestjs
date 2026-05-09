import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { ProductImage } from './entities/product-image.entity';
import { ProductColor } from './entities/product-color.entity';
import { Articul } from './entities/articul.entity';
import { CreateProductDto } from './dto/product/create.dto';
import { UpdateProductDto } from './dto/product/update.dto';
import { CreateProductImageDto } from './dto/product-image/create.dto';
import { UpdateProductImageDto } from './dto/product-image/update.dto';
import { CreateProductColorDto } from './dto/product-color/create.dto';
import { UpdateProductColorDto } from './dto/product-color/update.dto';
import { CreateArticulDto } from './dto/articul/create.dto';
import { UpdateArticulDto } from './dto/articul/update.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>,
    @InjectRepository(ProductImage)
    private readonly productImageRepo: Repository<ProductImage>,
    @InjectRepository(ProductColor)
    private readonly productColorRepo: Repository<ProductColor>,
    @InjectRepository(Articul)
    private readonly articulRepo: Repository<Articul>,
  ) {}

  // Products
  findAllProducts(): Promise<Product[]> {
    return this.productRepo.find({ relations: ['category', 'images', 'articuls', 'productColors'] });
  }

  async findOneProduct(id: number): Promise<Product> {
    const product = await this.productRepo.findOne({
      where: { id },
      relations: ['category', 'images', 'articuls', 'productColors'],
    });
    if (!product) throw new NotFoundException(`Product #${id} not found`);
    return product;
  }

  createProduct(dto: CreateProductDto): Promise<Product> {
    return this.productRepo.save(this.productRepo.create(dto));
  }

  async updateProduct(id: number, dto: UpdateProductDto): Promise<Product> {
    await this.findOneProduct(id);
    await this.productRepo.update(id, dto);
    return this.findOneProduct(id);
  }

  async removeProduct(id: number): Promise<void> {
    await this.findOneProduct(id);
    await this.productRepo.delete(id);
  }

  // Product Images
  findAllImages(): Promise<ProductImage[]> {
    return this.productImageRepo.find({ relations: ['product'] });
  }

  async findOneImage(id: number): Promise<ProductImage> {
    const image = await this.productImageRepo.findOne({ where: { id }, relations: ['product'] });
    if (!image) throw new NotFoundException(`ProductImage #${id} not found`);
    return image;
  }

  createImage(dto: CreateProductImageDto): Promise<ProductImage> {
    return this.productImageRepo.save(this.productImageRepo.create(dto));
  }

  async updateImage(id: number, dto: UpdateProductImageDto): Promise<ProductImage> {
    await this.findOneImage(id);
    await this.productImageRepo.update(id, dto);
    return this.findOneImage(id);
  }

  async removeImage(id: number): Promise<void> {
    await this.findOneImage(id);
    await this.productImageRepo.delete(id);
  }

  // Product Colors
  findAllColors(): Promise<ProductColor[]> {
    return this.productColorRepo.find({ relations: ['product', 'color'] });
  }

  async findOneColor(id: number): Promise<ProductColor> {
    const color = await this.productColorRepo.findOne({ where: { id }, relations: ['product', 'color'] });
    if (!color) throw new NotFoundException(`ProductColor #${id} not found`);
    return color;
  }

  createColor(dto: CreateProductColorDto): Promise<ProductColor> {
    return this.productColorRepo.save(this.productColorRepo.create(dto));
  }

  async updateColor(id: number, dto: UpdateProductColorDto): Promise<ProductColor> {
    await this.findOneColor(id);
    await this.productColorRepo.update(id, dto);
    return this.findOneColor(id);
  }

  async removeColor(id: number): Promise<void> {
    await this.findOneColor(id);
    await this.productColorRepo.delete(id);
  }

  // Articuls
  findAllArticuls(): Promise<Articul[]> {
    return this.articulRepo.find({ relations: ['product', 'carModel'] });
  }

  async findOneArticul(id: number): Promise<Articul> {
    const articul = await this.articulRepo.findOne({ where: { id }, relations: ['product', 'carModel'] });
    if (!articul) throw new NotFoundException(`Articul #${id} not found`);
    return articul;
  }

  createArticul(dto: CreateArticulDto): Promise<Articul> {
    return this.articulRepo.save(this.articulRepo.create(dto));
  }

  async updateArticul(id: number, dto: UpdateArticulDto): Promise<Articul> {
    await this.findOneArticul(id);
    await this.articulRepo.update(id, dto);
    return this.findOneArticul(id);
  }

  async removeArticul(id: number): Promise<void> {
    await this.findOneArticul(id);
    await this.articulRepo.delete(id);
  }
}
