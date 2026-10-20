import { InputType, Field, Int } from '@nestjs/graphql';
import { IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

@InputType()
export class CreateUlasanInput {
  @Field(() => Int) @IsInt()
  destinasiId: number;

  @Field(() => Int) @IsInt() @Min(1) @Max(5)
  rating: number;

  @Field() @IsString() @IsNotEmpty()
  komentar: string;
}
