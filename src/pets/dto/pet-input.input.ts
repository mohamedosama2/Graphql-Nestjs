import { Field, InputType } from '@nestjs/graphql';
import { IsAlpha, IsMongoId, IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreatePetInput {
  @IsAlpha()
  @IsNotEmpty()
  @Field()
  name: string;

  @IsOptional()
  @IsAlpha()
  @Field({ nullable: true })
  type?: string;

  @IsMongoId()
  @Field()
  owner: string;
}
