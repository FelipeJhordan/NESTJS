import { Guardian } from '../../domain/models/guardian';

export interface Pet {
  id: string;
  name: string;
  guardian: Guardian;
}
