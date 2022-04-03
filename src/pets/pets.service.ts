import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Pet, PetDocument } from './pets.entity';
import { Model } from 'mongoose';
import { CreatePetInput } from './dto/pet-input.input';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PetsService {
  constructor(
    @InjectModel(Pet.name) private petModel: Model<PetDocument>,
    private userService: UserService,
  ) {}

  async findOneById(id: string) {
    return this.petModel.findById(id);
  }

  async createOne(inputData: CreatePetInput): Promise<PetDocument> {
    const petDoc = await new this.petModel(inputData).save();
    return petDoc;
  }

  async findAll(): Promise<PetDocument[]> {
    return await this.petModel.find();
  }

  async getOwner(id: string) {
    return await this.userService.findOne(id);
  }
}
