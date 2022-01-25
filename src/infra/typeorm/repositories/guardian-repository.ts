import { EntityRepository, Repository } from 'typeorm';
import { GuardianEntity } from '../entities/guardian.entity';

@EntityRepository(GuardianEntity)
export class GuardianRepository extends Repository<GuardianEntity> {}
