import { GuardianDTO } from 'src/domain/dto/guardianDTO';

export interface addGuardian {
  addGuardian(guardianDto: GuardianDTO): Promise<void>;
}
