import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { randomInt } from 'crypto';
import { GuardianRepository } from './guardian-repository';
import { GuardianEntity } from './guardian.entity';
import { Guardian } from './guardian.model';
import { GuardianDTO } from './guardianDTO';
import mock from './mock';

@Injectable()
export class GuardianService {
  constructor(
    @InjectRepository(GuardianEntity)
    private readonly guardianRepository: GuardianRepository,
  ) {}
  private guardians: Guardian[] = mock;

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
