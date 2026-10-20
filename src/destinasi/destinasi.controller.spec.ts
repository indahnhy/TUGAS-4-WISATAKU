import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import {
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { CreateDestinasiDto } from './dto/create-destinasi.dto';
import { UpdateDestinasiDto } from './dto/update-destinasi.dto';

/**
 * Response data destinasi
 */
class DestinasiResponseDto {
  @ApiProperty({
    example: 1,
    description: 'ID destinasi',
  })
  id: number;

  @ApiProperty({
    example: 'Pantai Kuta',
    description: 'Nama destinasi wisata',
  })
  nama: string;

  @ApiProperty({
    example: 'Bali',
    description: 'Lokasi destinasi wisata',
  })
  lokasi: string;
}

/**
 * Response ketika berhasil
 */
class MessageResponseDto {
  @ApiProperty({
    example: 'Operasi berhasil',
  })
  message: string;
}

/**
 * Controller Destinasi
 */
@ApiTags('destinasi')
@Controller('destinasi')
export class DestinasiController {

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
    type: DestinasiResponseDto,
    isArray: true,
  })
  findAll() {
    return [
      {
        id: 1,
        nama: 'Pantai Kuta',
        lokasi: 'Bali',
      },
      {
        id: 2,
        nama: 'Tanah Lot',
        lokasi: 'Bali',
      },
    ];
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
    type: DestinasiResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Destinasi tidak ditemukan',
  })
  findOne(@Param('id') id: string) {
    return {
      id: Number(id),
      nama: 'Pantai Kuta',
      lokasi: 'Bali',
    };
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
  create(@Body() createDestinasiDto: CreateDestinasiDto) {
    return {
      message: 'Destinasi berhasil ditambahkan',
      data: createDestinasiDto,
    };
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
  @ApiResponse({
    status: 400,
    description: 'Data destinasi tidak valid',
  })
  update(
    @Param('id') id: string,
    @Body() updateDestinasiDto: UpdateDestinasiDto,
  ) {
    return {
      message: 'Destinasi berhasil diperbarui',
      id: Number(id),
      data: updateDestinasiDto,
    };
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
    type: MessageResponseDto,
  })
  @ApiResponse({
    status: 404,
    description: 'Destinasi tidak ditemukan',
  })
  remove(@Param('id') id: string) {
    return {
      message: `Destinasi dengan ID ${id} berhasil dihapus`,
    };
  }
}