import { Module } from '@nestjs/common';
import { UlasanResolver } from './ulasan.resolver';

@Module({
  providers: [UlasanResolver],
})
export class UlasanModule {}
