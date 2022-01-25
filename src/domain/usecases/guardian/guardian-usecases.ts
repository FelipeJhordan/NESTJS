import { getGuardians } from './get-guardians';
import { addGuardian } from './save-guardian';

export interface GuardianUseCases extends getGuardians, addGuardian {}
