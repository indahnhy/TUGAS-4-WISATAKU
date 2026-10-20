import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  ParseIntPipe,
} from '@nestjs/common';

import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';
import { DestinasiService } from './destinasi.service';

@ApiTags('destinasi')
@Controller('destinasi')
export class DestinasiController {
  constructor(
    private readonly destinasiService: DestinasiService,
  ) {}

  // =====================================================
  // GET SEMUA DESTINASI
  // =====================================================

  @Get()
  @ApiOperation({
    summary: 'Menampilkan semua destinasi wisata',
  })
  @ApiResponse({
    status: 200,
    description: 'Daftar destinasi berhasil ditampilkan',
  })
  findAll() {
    return this.destinasiService.findAll();
  }

  // =====================================================
  // GET DESTINASI BERDASARKAN ID
  // =====================================================

  @Get(':id')
  @ApiOperation({
    summary: 'Menampilkan detail destinasi berdasarkan ID',
  })
  @ApiResponse({
    status: 200,
    description: 'Detail destinasi berhasil ditampilkan',
  })
  @ApiResponse({
    status: 404,
    description: 'Destinasi tidak ditemukan',
  })
  findOne(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.destinasiService.findOne(id);
  }

  // =====================================================
  // GET ULASAN MILIK DESTINASI
  // =====================================================

  @Get(':id/ulasan')
  @ApiOperation({
    summary: 'Menampilkan ulasan milik destinasi tertentu',
  })
  @ApiResponse({
    status: 200,
    description: 'Daftar ulasan berhasil ditampilkan',
  })
  @ApiResponse({
    status: 404,
    description: 'Destinasi tidak ditemukan',
  })
  findUlasan(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.destinasiService.findUlasan(id);
  }

  // =====================================================
  // GET FASILITAS MILIK DESTINASI
  // =====================================================

  @Get(':id/fasilitas')
  @ApiOperation({
    summary: 'Menampilkan fasilitas milik destinasi tertentu',
  })
  @ApiResponse({
    status: 200,
    description: 'Daftar fasilitas berhasil ditampilkan',
  })
  @ApiResponse({
    status: 404,
    description: 'Destinasi tidak ditemukan',
  })
  findFasilitas(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.destinasiService.findFasilitas(id);
  }

  // =====================================================
  // POST TAMBAH DESTINASI
  // =====================================================

  @Post()
  @ApiOperation({
    summary: 'Menambahkan destinasi wisata',
  })
  @ApiResponse({
    status: 201,
    description: 'Destinasi berhasil ditambahkan',
  })
  @ApiResponse({
    status: 400,
    description: 'Data destinasi tidak valid',
  })
  create(
    @Body() createDestinasiDto: CreateDestinasiDto,
  ) {
    return this.destinasiService.create(createDestinasiDto);
  }

  // =====================================================
  // PATCH UPDATE DESTINASI
  // =====================================================

  @Patch(':id')
  @ApiOperation({
    summary: 'Memperbarui data destinasi',
  })
  @ApiResponse({
    status: 200,
    description: 'Destinasi berhasil diperbarui',
  })
  @ApiResponse({
    status: 404,
    description: 'Destinasi tidak ditemukan',
  })
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDestinasiDto: UpdateDestinasiDto,
  ) {
    return this.destinasiService.update(
      id,
      updateDestinasiDto,
    );
  }

  // =====================================================
  // DELETE DESTINASI
  // =====================================================

  @Delete(':id')
  @ApiOperation({
    summary: 'Menghapus destinasi wisata',
  })
  @ApiResponse({
    status: 200,
    description: 'Destinasi berhasil dihapus',
  })
  @ApiResponse({
    status: 404,
    description: 'Destinasi tidak ditemukan',
  })
  remove(
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.destinasiService.remove(id);
  }
} 