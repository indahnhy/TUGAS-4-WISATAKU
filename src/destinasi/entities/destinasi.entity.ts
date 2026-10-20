import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Ulasan } from '../../ulasan/entities/ulasan.entity';
import { Fasilitas } from '../../fasilitas/entities/fasilitas.entity';

@ObjectType()
export class Destinasi {
  @Field(() => Int) id: number;
  @Field() nama: string;
  @Field() deskripsi: string;   
  @Field() lokasi: string;
  @Field(() => Int) hargaTiket: number;
  @Field() createdAt: Date;

  @Field(() => [Ulasan], { nullable: true }) ulasan?: Ulasan[];
  @Field(() => [Fasilitas], { nullable: true }) fasilitas?: Fasilitas[];
}
