import { EntityRepository, Repository } from 'typeorm';
import { GuardianEntity } from './guardian.entity';

@EntityRepository(GuardianEntity)
export class GuardianRepository extends Repository<GuardianEntity> {}
