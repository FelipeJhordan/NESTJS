import { Guardian } from './guardian.model';

export type GuardianDTO = Omit<Guardian, 'id'>;
