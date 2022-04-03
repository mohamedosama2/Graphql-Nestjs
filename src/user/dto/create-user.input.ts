import { InputType, Int, Field } from '@nestjs/graphql';
import { IsAlpha, IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsAlpha()
  @IsNotEmpty()
  @Field({ description: 'Email' })
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @Field({ description: 'Email' })
  email: string;
}
