import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './entities/user.entity';

@Module({
  providers: [UserResolver, UserService],
  imports: [
    MongooseModule.forFeature([{ schema: UserSchema, name: User.name }]),
  ],
  exports: [UserService],
})
export class UserModule {}
