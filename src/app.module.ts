import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { BannersModule } from './features/banners/banners.module';
import { BranchesModule } from './features/branches/branches.module';
import { CarMakesModule } from './features/car-makes/car-makes.module';
import { CartModule } from './features/cart/cart.module';
import { CategoriesModule } from './features/categories/categories.module';
import { ColorsModule } from './features/colors/colors.module';
import { CustomProductsModule } from './features/custom-products/custom-products.module';
import { MaterialsModule } from './features/materials/materials.module';
import { OrdersModule } from './features/orders/orders.module';
import { PhoneNumbersModule } from './features/phone-numbers/phone-numbers.module';
import { ProductsModule } from './features/products/products.module';
import { RequestsModule } from './features/requests/requests.module';
import { SocialLinksModule } from './features/social-links/social-links.module';
import { StaticInfoModule } from './features/static-info/static-info.module';
import { UsersModule } from './features/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST', 'localhost'),
        port: config.get<number>('DB_PORT', 5432),
        username: config.get<string>('DB_USERNAME', 'postgres'),
        password: config.get<string>('DB_PASSWORD', 'postgres'),
        database: config.get<string>('DB_NAME', 'cardinar'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: config.get<boolean>('DB_SYNC', false),
      }),
    }),
    BannersModule,
    BranchesModule,
    CarMakesModule,
    CartModule,
    CategoriesModule,
    ColorsModule,
    CustomProductsModule,
    MaterialsModule,
    OrdersModule,
    PhoneNumbersModule,
    ProductsModule,
    RequestsModule,
    SocialLinksModule,
    StaticInfoModule,
    UsersModule,
  ],
})
export class AppModule {}
