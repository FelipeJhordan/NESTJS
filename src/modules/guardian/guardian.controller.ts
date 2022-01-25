import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { GuardianEntity } from './guardian.entity';
import { Guardian } from '../../domain/models/guardian';
import { GuardianService } from './guardian.service';
import { GuardianDTO } from './guardianDTO';

@Controller('/api/guardians')
export class GuardianController {
  constructor(private readonly guardianService: GuardianService) {}

  @Get('/:name')
  async getGuardianByName(
    @Param('name') name: string,
  ): Promise<GuardianEntity[]> {
    return this.guardianService.getGuardianByName(name);
  }

  @Get()
  async getGuardians(): Promise<GuardianEntity[]> {
    const guardians = await this.guardianService.getGuardians();
    return guardians;
  }

  @Post()
  async addGuardian(@Body() guardianDto: GuardianDTO) {
    await this.guardianService.addGuardian(guardianDto);
  }

  @Delete('/:id')
  async removeGuardian(@Param('id') id: string) {
    await this.guardianService.removeGuardian(id);
  }

  @Put('/:id')
  async updateGuardian(
    @Param('id') id: string,
    @Body() guardianDto: GuardianDTO,
  ) {
    await this.guardianService.updateGuardian(id, guardianDto);
  }
}
