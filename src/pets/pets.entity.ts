import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { User } from 'src/user/entities/user.entity';

export type PetDocument = Pet & Document;

@Schema()
@ObjectType()
export class Pet {
  @Field()
  _id?: string;

  @Prop(String)
  @Field()
  name: string;

  @Prop(String)
  @Field({ nullable: true })
  type?: string;

  @Prop({ type: Types.ObjectId, ref: 'users', required: true })
  @Field(() => User, { nullable: true })
  owner: string;
}
export const PetSchema = SchemaFactory.createForClass(Pet);
