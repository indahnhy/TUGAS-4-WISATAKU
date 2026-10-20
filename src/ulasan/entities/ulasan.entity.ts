import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Ulasan {
  @Field(() => Int) id: number;
  @Field(() => Int) rating: number;
  @Field() komentar: string;
  @Field() createdAt: Date;
}
