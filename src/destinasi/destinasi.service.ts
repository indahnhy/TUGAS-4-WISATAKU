import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service';
import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

@Injectable()
export class DestinasiService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll() {
    return this.prisma.destinasi.findMany();
  }

  async findOne(id: number) {
    const destinasi = await this.prisma.destinasi.findUnique({
      where: { id },
    });

    if (!destinasi) {
      throw new NotFoundException(
        `Destinasi dengan ID ${id} tidak ditemukan`,
      );
    }

    return destinasi;
  }

  // ===== BARU: ulasan milik destinasi =====
  async findUlasan(id: number) {
    await this.findOne(id); // otomatis 404 jika destinasi tidak ada

    return this.prisma.ulasan.findMany({
      where: { destinasiId: id },
      orderBy: { createdAt: 'desc' },
    });
  }

  // ===== BARU: fasilitas milik destinasi =====
  async findFasilitas(id: number) {
    await this.findOne(id);

    return this.prisma.fasilitas.findMany({
      where: { destinasiId: id },
    });
  }

  async create(data: CreateDestinasiDto) {
    return this.prisma.destinasi.create({
      data: {
        nama: data.nama,
        deskripsi: data.deskripsi,
        lokasi: data.lokasi,
        hargaTiket: data.hargaTiket,
      },
    });
  }

  async update(id: number, data: UpdateDestinasiDto) {
    await this.findOne(id);

    return this.prisma.destinasi.update({
      where: { id },
      data,
    });
  }

  async remove(id: number) {
    await this.findOne(id);

    return this.prisma.destinasi.delete({
      where: { id },
    });
  }
}