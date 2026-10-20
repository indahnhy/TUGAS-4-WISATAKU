
import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateDestinasiDto {
  @ApiProperty({ example: 'Pantai Kuta' })
  @IsString()
  @IsNotEmpty()
  nama: string;

  @ApiProperty({ example: 'Pantai populer di Bali' })
  @IsString()
  @IsNotEmpty()
  deskripsi: string;

  @ApiProperty({ example: 'Bali' })
  @IsString()
  @IsNotEmpty()
  lokasi: string;

  @ApiProperty({ example: 15000 })
  @IsInt()
  @Min(0)
  hargaTiket: number;
}