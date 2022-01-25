import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GuardianDTO } from 'src/domain/dto/guardianDTO';
import { GuardianUseCases } from 'src/domain/usecases/guardian/guardian-usecases';
import { GuardianEntity } from 'src/infra/typeorm/entities/guardian.entity';
import { GuardianRepository } from 'src/infra/typeorm/repositories/guardian-repository';

@Injectable()
export class GuardianService implements GuardianUseCases {
  constructor(
    @InjectRepository(GuardianEntity)
    private readonly guardianRepository: GuardianRepository,
  ) {}

  async getGuardians(): Promise<GuardianEntity[]> {
    return this.guardianRepository.find({});
  }

  async getGuardianByName(name: string): Promise<GuardianEntity[]> {
    return this.guardianRepository.find({
      name,
    });
  }

  async addGuardian(guardianDto: GuardianDTO): Promise<void> {
    const guardian = this.guardianRepository.create({ ...guardianDto });
    this.guardianRepository.save(guardian);
  }

  async removeGuardian(id: string) {
    this.guardianRepository.delete({ id });
  }

  async updateGuardian(id: string, guardianDto: GuardianDTO) {
    this.guardianRepository.update(id, {
      ...guardianDto,
    });
  }
}
