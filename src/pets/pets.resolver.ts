import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import { CreatePetInput } from './dto/pet-input.input';
import { Pet, PetDocument } from './pets.entity';
import { PetsService } from './pets.service';

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query((returns) => Pet)
  async findOneById(@Args('id') id: string) {
    return this.petsService.findOneById(id);
  }

  @ResolveField((returns) => User)
  async owner(@Parent() pet: Pet) {
    return this.petsService.getOwner(pet.owner);
  }

  @Query((returns) => [Pet])
  async pets() {
    return this.petsService.findAll();
  }

  @Mutation((returns) => Pet)
  async createPet(@Args('CreatePetInput') CreatePetInput: CreatePetInput) {
    return this.petsService.createOne(CreatePetInput);
  }
}
