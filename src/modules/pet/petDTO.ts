import { Pet } from './pet.model';

export type PetDTO = Omit<Pet, 'id'>;
