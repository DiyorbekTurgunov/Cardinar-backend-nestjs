import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaticInfo } from './entities/static-info.entity';
import { StaticInfoService } from './static-info.service';
import { StaticInfoController } from './static-info.controller';

@Module({
  imports: [TypeOrmModule.forFeature([StaticInfo])],
  controllers: [StaticInfoController],
  providers: [StaticInfoService],
})
export class StaticInfoModule {}
