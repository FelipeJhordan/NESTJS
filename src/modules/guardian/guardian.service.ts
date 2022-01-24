import { Injectable } from '@nestjs/common';
import { randomInt } from 'crypto';
import { Guardian } from './guardian.model';
import { GuardianDTO } from './guardianDTO';
import mock from './mock';

@Injectable()
export class GuardianService {
  constructor() {
    console.log('eai');
  }
  private guardians: Guardian[] = mock;

  getGuardians(): Guardian[] {
    return this.guardians;
  }

  getGuardianByName(name: string): Guardian[] {
    return this.guardians.filter((guardian) => guardian.name === name);
  }

  addGuardian(guardianDto: GuardianDTO): void {
    this.guardians.push({ ...guardianDto, id: randomInt(12).toString() });
  }

  removeGuardian(id: string) {
    this.guardians = this.guardians.filter((guardian) => guardian.id !== id);
  }

  updateGuardian(id: string, guardianDto: GuardianDTO) {
    const guardianIndex = this.guardians.findIndex(
      (guardian) => guardian.id === id,
    );

    this.guardians[guardianIndex] = {
      ...this.guardians[guardianIndex],
      ...guardianDto,
    };
  }
}
