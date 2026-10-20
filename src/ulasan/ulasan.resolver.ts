
import { Resolver, Mutation, Args, Query } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { Ulasan } from './entities/ulasan.entity';
import { CreateUlasanInput } from './dto/create-ulasan.input';
import { PrismaService } from '../prisma/prisma.service';

@Resolver(() => Ulasan)
export class UlasanResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Mutation(() => Ulasan, { name: 'tambahUlasan' })
  async tambahUlasan(@Args('input') input: CreateUlasanInput) {
    const ada = await this.prisma.destinasi.findUnique({
      where: { id: input.destinasiId },
    });

    if (!ada) {
      throw new NotFoundException(
        `Destinasi ${input.destinasiId} tidak ditemukan`,
      );
    }

    return this.prisma.ulasan.create({ data: input });
  }

  @Query(() => [Ulasan], { name: 'semuaUlasan' })
  async semuaUlasan() {
    return this.prisma.ulasan.findMany();
  }
}
