import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';
import { Pet } from './pet.model';
import { PetDTO } from './petDTO';
import mock from './mock';

@Injectable()
export class PetService {
  private pets: Pet[] = mock;

  getPets(): Pet[] {
    return this.pets;
  }

  getPetByName(name: string): Pet[] {
    return this.pets.filter((pet) => pet.name === name);
  }

  addPet(petDto: PetDTO): void {
    this.pets.push({ ...petDto, id: randomInt(12).toString() });
  }

  removePet(id: string) {
    this.pets = this.pets.filter((pet) => pet.id !== id);
  }

  updatePet(id: string, petDto: PetDTO) {
    const petIndex = this.pets.findIndex((pet) => pet.id === id);

    this.pets[petIndex] = {
      ...this.pets[petIndex],
      ...petDto,
    };
  }
}
