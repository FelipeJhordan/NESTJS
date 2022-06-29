import { Pet } from './pet';

export type PetDTO = Omit<Pet, 'id'>;
