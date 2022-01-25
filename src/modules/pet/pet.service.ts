import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomInt } from 'crypto';
import { Pet } from './pet';
import { PetRepository } from './pet-repository';
import { PetEntity } from './pet.entity';
import { PetDTO } from './petDTO';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(PetEntity)
    private readonly petRepository: PetRepository,
  ) {}
  async getPets(): Promise<PetEntity[]> {
    return this.petRepository.find();
  }

  async getPetByName(name: string): Promise<PetEntity[]> {
    return this.petRepository.find({
      name,
    });
  }

  async addPet(petDto: PetDTO): Promise<void> {
    const pet = this.petRepository.create(petDto);
    this.petRepository.save(pet);
  }

  async removePet(id: string) {
    this.petRepository.delete(id);
  }

  async updatePet(id: string, petDto: PetDTO) {
    this.petRepository.update(id, {
      ...petDto,
    });
  }
}
