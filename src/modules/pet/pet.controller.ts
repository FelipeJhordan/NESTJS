import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Pet } from './pet.model';
import { PetService } from './pet.service';
import { PetDTO } from './petDTO';

@Controller('/api/pets')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Get('/:name')
  getPetByName(@Param('name') name: string): Pet[] {
    return this.petService.getPetByName(name);
  }

  @Get()
  getPets(): Pet[] {
    return this.petService.getPets();
  }

  @Post()
  addPet(@Body() petDto: PetDTO) {
    this.petService.addPet(petDto);
  }

  @Delete('/:id')
  removePet(@Param('id') id: string) {
    this.petService.removePet(id);
  }

  @Put('/:id')
  updatePet(@Param('id') id: string, @Body() petDto: PetDTO) {
    this.petService.updatePet(id, petDto);
  }
}
