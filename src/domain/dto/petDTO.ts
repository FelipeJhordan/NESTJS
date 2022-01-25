import { Pet } from 'src/domain/models/pet';

export type PetDTO = Omit<Pet, 'id'>;
