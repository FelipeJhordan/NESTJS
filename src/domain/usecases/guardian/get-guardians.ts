import { GuardianEntity } from 'src/infra/typeorm/entities/guardian.entity';

export interface getGuardians {
  getGuardians(): Promise<GuardianEntity[]>;
}
