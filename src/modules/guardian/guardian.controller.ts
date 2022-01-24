import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Guardian } from './guardian.model';
import { GuardianService } from './guardian.service';
import { GuardianDTO } from './guardianDTO';

@Controller('/api/guardians')
export class GuardianController {
  constructor(private readonly guardianService: GuardianService) {}

  @Get('/:name')
  getGuardianByName(@Param('name') name: string): Guardian[] {
    return this.guardianService.getGuardianByName(name);
  }

  @Get()
  getGuardians(): Guardian[] {
    return this.guardianService.getGuardians();
  }

  @Post()
  addGuardian(@Body() guardianDto: GuardianDTO) {
    this.guardianService.addGuardian(guardianDto);
  }

  @Delete('/:id')
  removeGuardian(@Param('id') id: string) {
    this.guardianService.removeGuardian(id);
  }

  @Put('/:id')
  updateGuardian(@Param('id') id: string, @Body() guardianDto: GuardianDTO) {
    this.guardianService.updateGuardian(id, guardianDto);
  }
}
