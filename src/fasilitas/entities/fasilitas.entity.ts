import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Fasilitas {
  @Field(() => Int) id: number;
  @Field() namaFasilitas: string;
}
