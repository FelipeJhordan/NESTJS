import { Guardian } from '../guardian/guardian.model';

export interface Pet {
  id: string;
  name: string;
  guardian: Guardian;
}
