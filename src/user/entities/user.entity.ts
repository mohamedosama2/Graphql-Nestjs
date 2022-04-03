import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Pet } from 'src/pets/pets.entity';

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {
  /*  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number; */
  @Field()
  _id?:string

  @Prop({ type: String, required: true, unique: true })
  @Field({ description: 'Email' })
  username: string;

  @Prop({ type: String, required: true, unique: true })
  @Field({ description: 'Email' })
  email: string;

/*   @Prop({
    type: [
      {
        type: Types.ObjectId,
        ref: 'pets',
      },
    ],
  })
  @Field((type) => [Pet], { nullable: true })
  pets?: Pet[]; */
}

export const UserSchema = SchemaFactory.createForClass(User);
