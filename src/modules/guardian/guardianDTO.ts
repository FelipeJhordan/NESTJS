import { Guardian } from '../../domain/models/guardian';

export type GuardianDTO = Omit<Guardian, 'id'>;
