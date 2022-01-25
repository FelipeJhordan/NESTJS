import { Guardian } from 'src/domain/models/guardian';

export type GuardianDTO = Omit<Guardian, 'id'>;
