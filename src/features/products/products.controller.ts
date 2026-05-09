import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/product/create.dto';
import { UpdateProductDto } from './dto/product/update.dto';
import { CreateProductImageDto } from './dto/product-image/create.dto';
import { UpdateProductImageDto } from './dto/product-image/update.dto';
import { CreateProductColorDto } from './dto/product-color/create.dto';
import { UpdateProductColorDto } from './dto/product-color/update.dto';
import { CreateArticulDto } from './dto/articul/create.dto';
import { UpdateArticulDto } from './dto/articul/update.dto';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all products' })
  findAll() {
    return this.productsService.findAllProducts();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOneProduct(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create product' })
  create(@Body() dto: CreateProductDto) {
    return this.productsService.createProduct(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update product' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProductDto) {
    return this.productsService.updateProduct(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete product' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.removeProduct(id);
  }
}

@ApiTags('Product Images')
@Controller('product-images')
export class ProductImagesController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all product images' })
  findAll() {
    return this.productsService.findAllImages();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product image by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOneImage(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create product image' })
  create(@Body() dto: CreateProductImageDto) {
    return this.productsService.createImage(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update product image' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProductImageDto) {
    return this.productsService.updateImage(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete product image' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.removeImage(id);
  }
}

@ApiTags('Product Colors')
@Controller('product-colors')
export class ProductColorsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all product colors' })
  findAll() {
    return this.productsService.findAllColors();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get product color by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOneColor(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create product color' })
  create(@Body() dto: CreateProductColorDto) {
    return this.productsService.createColor(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update product color' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateProductColorDto) {
    return this.productsService.updateColor(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete product color' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.removeColor(id);
  }
}

@ApiTags('Articuls')
@Controller('articuls')
export class ArticulsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all articuls' })
  findAll() {
    return this.productsService.findAllArticuls();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get articul by id' })
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOneArticul(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create articul' })
  create(@Body() dto: CreateArticulDto) {
    return this.productsService.createArticul(dto);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update articul' })
  update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdateArticulDto) {
    return this.productsService.updateArticul(id, dto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete articul' })
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.removeArticul(id);
  }
}
