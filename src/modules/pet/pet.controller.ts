import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Pet } from './pet';
import { PetEntity } from './pet.entity';
import { PetService } from './pet.service';
import { PetDTO } from './petDTO';

@Controller('/api/pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get('/:name')
  async getPetByName(@Param('name') name: string): Promise<PetEntity[]> {
    return this.petService.getPetByName(name);
  }

  @Get()
  async getPets(): Promise<PetEntity[]> {
    return this.petService.getPets();
  }

  @Post()
  async addPet(@Body() petDto: PetDTO) {
    this.petService.addPet(petDto);
  }

  @Delete('/:id')
  async removePet(@Param('id') id: string) {
    this.petService.removePet(id);
  }

  @Put('/:id')
  async updatePet(@Param('id') id: string, @Body() petDto: PetDTO) {
    this.petService.updatePet(id, petDto);
  }
}
