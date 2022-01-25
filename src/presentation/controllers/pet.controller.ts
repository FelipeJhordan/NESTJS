import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PetService } from 'src/app/usecases/pet.service';
import { PetEntity } from 'src/infra/typeorm/entities/pet.entity';
import { PetDTO } from '../../domain/dto/petDTO';

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
