import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PetDTO } from 'src/domain/dto/petDTO';
import { PetEntity } from 'src/infra/typeorm/entities/pet.entity';
import { PetRepository } from 'src/infra/typeorm/repositories/pet-repository';

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
