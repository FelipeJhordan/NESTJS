import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GuardianRepository } from './guardian-repository';
import { GuardianEntity } from './guardian.entity';
import { GuardianDTO } from './guardianDTO';

@Injectable()
export class GuardianService {
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
