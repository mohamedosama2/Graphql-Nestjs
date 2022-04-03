import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsResolver } from './pets.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { Pet, PetSchema } from './pets.entity';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [
    UserModule,
    MongooseModule.forFeature([{ schema: PetSchema, name: Pet.name }]),
  ],
  providers: [PetsService, PetsResolver],
})
export class PetsModule {}
